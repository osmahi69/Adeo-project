import Vue from 'vue'
import Vuex from 'vuex'

import stores from '@/store/modules/stores'
import user from '@/store/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    stores,
    user
  }
})
