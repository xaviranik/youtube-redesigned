import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarIsOpen: true,
  },
  getters: {
    sidebarIsOpen: state => {
      return state.sidebarIsOpen
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebarIsOpen = !state.sidebarIsOpen
    }
  },
  actions: {
    toggleSidebar: (context) => {
      context.commit('TOGGLE_SIDEBAR')
    }
  }
});
