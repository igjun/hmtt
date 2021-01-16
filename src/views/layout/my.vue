<template>
  <div class="hemo">
    <div class="header user-info" v-if="user">
      <div class="base-info">
        <div class="letf">
          <van-image class="userimg" round :src="userinfo.photo" />
          <span>{{ userinfo.name }}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span>{{ userinfo.art_count }}</span>
          <span>头条</span>
        </div>
        <div class="data-item">
          <span>{{ userinfo.like_count }}</span>
          <span>关注</span>
        </div>
        <div class="data-item">
          <span>{{ userinfo.fans_count }}</span>
          <span>粉丝</span>
        </div>
        <div class="data-item">
          <span>{{ userinfo.follow_count }}</span>
          <span>获赞 </span>
        </div>
      </div>
    </div>
    <div class="header login" @click="$router.push('/login')" v-else>
      <div class="headerimg">
        <img src="../../assets/mobile.png" alt="" />
        <span class="text">登录/注册</span>
      </div>
    </div>
    <van-grid :column-num="2" class="frid-nav">
      <van-grid-item icon="photo-o" text="收藏" />
      <van-grid-item icon="photo-o" text="历史" />
    </van-grid>
    <van-cell-group>
      <van-cell title="xxtt" is-link />
      <van-cell title="xztt" is-link />
    </van-cell-group>
    <van-cell-group v-if="user" class="logoutmax">
      <van-button type="danger" size="mini" @click="onloginout" class="logout"
        >退出</van-button
      >
    </van-cell-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { userinfo } from '../../api/user';

export default {
  name: 'hemo',
  components: {},
  props: {},
  data() {
    return {
      userinfo: {},
    };
  },
  computed: {
    ...mapState(['user']),
  },
  watch: {},
  created() {
    if (this.user) {
      this.loaduserinfo();
    }
  },
  mounted() {},
  methods: {
    onloginout() {
      this.$dialog
        .confirm({
          title: '退出',
          message: '你确定要退出吗?',
        })
        .then(() => {
          this.$store.commit('setuser', null);
        })
        .catch(() => {});
    },
    loaduserinfo() {
      userinfo().then((res) => {
        this.userinfo = res.data.data;
      });
    },
  },
};
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 361px;
  background-image: url(../../assets/banner.png);
  background-size: cover;
}
.headerimg {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 130px;
    height: 130px;
  }
  .text {
    font-size: 32px;
  }
}
.user-info {
  background-image: url(../../assets/banner.png);
  font-size: 40px;
  height: 362px;
  .base-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 231px;
    width: 100%;
    .letf {
      display: flex;
      align-items: center;
      .userimg {
        width: 100px;
        height: 100px;
      }
    }
    .right {
      button {
        border: 2px;
        font-size: 30px;
        background-color: #fff;
      }
    }
  }
  .data-stats {
    width: 100%;

    display: flex;
    .data-item {
      span {
        font-size: 30px;
        color: #fff;
      }
      height: 132px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
.logoutmax {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logout {
    width: 40%;
  }
}
</style>
