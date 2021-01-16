<template>
  <div class="ffa">
    <van-nav-bar title="" left-text="返回" left-arrow>
      <van-button slot="title">搜索</van-button>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab :title="item.name" v-for="item in userchannel" :key="item.id"
        ><articlelist :channel="item"></articlelist
      ></van-tab>
      <div slot="nav-right" class="navigationslot"></div>
      <div slot="nav-right" class="tabsrigth">
        <i class="tt ttgengduo"></i>
      </div>
    </van-tabs>
  </div>
</template>

<script>
import { userchannel } from '@/api/user.js';
import articlelist from './components/article-list';
export default {
  name: 'giao',
  components: {
    articlelist: articlelist,
  },
  props: {},
  data() {
    return {
      active: 0,
      userchannel: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getuserchannel();
  },
  mounted() {},
  methods: {
    getuserchannel() {
      userchannel().then((res) => {
        console.log(res);
        this.userchannel = res.data.data.channels;
      });
    },
  },
};
</script>

<style scoped lang="less">
.ffa {
  padding-bottom: 100px;
}
.van-button {
  width: 450px;
  height: 60px;
  border-radius: 30px 30px 30px 30px;
  font-size: 20px;
  background-color: rgba(8, 194, 241, 0.233);
  border: 0px;
  color: #fff;
}
.tabsrigth {
  position: fixed;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 1.17333rem;
  background-color: rgba(255, 255, 255, 0.932);
  i {
    font-size: 32px;
  }
  .van-tabs__wrap {
    height: 82px;
  }
}
.navigationslot {
  width: 66px;
  height: 100%;
  flex-shrink: 0;
}
</style>
