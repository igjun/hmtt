<template>
  <div class="layout">
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/hemo">
        <i slot="icon" class="tt ttshouye"></i
        ><span>首页</span></van-tabbar-item
      >
      <van-tabbar-item to="/qa">
        <i slot="icon" class="tt ttwenda"></i><span>问答</span></van-tabbar-item
      >
      <van-tabbar-item to="/video">
        <i slot="icon" class="tt ttshipin"></i
        ><span>视频</span></van-tabbar-item
      >
      <van-tabbar-item to="/my">
        <i slot="icon" class="tt ttwode"></i><span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {},
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.tt {
  font-size: 40px;
}
</style>
