import Vue from 'vue';
import Vuex from 'vuex';

import { setitem, getitem } from '../utils/storage';

Vue.use(Vuex);

const TOKEN_KEY = 'TOUTIAO_USER';

export default new Vuex.Store({
  state: {
    user: getitem(TOKEN_KEY),
  },
  mutations: {
    setuser(state, data) {
      state.user = data;
      setitem(TOKEN_KEY, state.user);
    },
  },
  actions: {},
  modules: {},
});
