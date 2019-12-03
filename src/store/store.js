import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    result: 4
  },
  getters: {
    tenResult: state => {
      return state.result;
    },
    nameResult: state => {
      return state.result + 'abvdfvd';
    }
  },
  mutations: {
    increment (state) {
      return state.result *=2
    }
  },
  actions: {
    abc: ({commit}) => {
      commit('increment');
    }
  }
})