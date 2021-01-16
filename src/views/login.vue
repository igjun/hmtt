<template>
  <div class="logingogo">
    <van-nav-bar title="登录" class="page-nav">
      <van-icon name="cross" slot="left" @click="$router.back()" />
    </van-nav-bar>

    <van-form @submit="onSubmit" ref="loginform">
      <van-field
        name="mobile"
        placeholder="输入手机号"
        v-model="user.mobile"
        :rules="userfromrules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="tt ttwode"></i>
      </van-field>

      <van-field
        name="密码"
        placeholder="验证码"
        v-model="user.code"
        :rules="userfromrules.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="tt ttyanzhengma"></i>
        <template #button>
          <van-count-down
            :time="time.times"
            format="ss s"
            v-if="VerifyCountdown"
            @finish="VerifyCountdown = false"
          />
          <van-button
            v-else
            size="small"
            type="primary"
            native-type="button"
            @click="onSubmits"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, logincode } from '../api/user';

export default {
  name: 'loginindex',
  data() {
    return {
      VerifyCountdown: false,
      time: {
        times: 1000 * 5,
      },
      user: {
        mobile: '13811111111',
        code: '246810',
      },
      userfromrules: {
        mobile: [
          {
            required: true,
            message: '请填写密码',
          },
          {
            pattern: /0?(13|14|15|18|17)[0-9]{9}/,
            message: '格式不对',
          },
        ],
        code: [{ required: true, message: '请填写密码' }],
      },
    };
  },
  components: {},
  props: {},

  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      this.$toast.loading({
        message: '正在登录中...',
        forbidClick: true,
      });
      const user = this.user;
      login(user)
        .then((res) => {
          if (res.status === 201) {
            this.$toast.success(res.data.message);
            this.$store.commit('setuser', res.data.data);
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.$toast.fail('登录失败');
          }
        });
    },
    onSubmits() {
      this.$refs.loginform
        .validate('mobile')
        .then(() => {
          return logincode(this.user.mobile);
        })
        .then((res) => {
          this.VerifyCountdown = true;
          this.$toast('发送成功');
        })
        .catch((err) => {
          if (err.response.status === 429) {
            this.$toast('请求过于平凡');
          }
        });
    },
  },
};
</script>

<style scoped lang="less">
.tt {
  font-size: 30px;
}
.van-icon {
  color: #fff;
}
</style>
