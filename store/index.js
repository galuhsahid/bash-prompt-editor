import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    example:
        {
            output: '',
            commands: ''
        },
    chosen: [
      {
        name: 'hostname',
        bashCode: 'bashhostname',
        output: 'acidburn',
      }, {
        name: 'shit',
        bashCode: 'jhwbefj',
        output: 'bleh'
      }
    ],
    list: [
      {
        name: 'username',
        bashCode: 'bashuname',
        output: 'me'
      },
      {
        name: 'shellversion',
        bashCode: 'sh',
        output: 'bash'
      },
    ],
  },
  mutations: {
    updateUser: function (state, example) {
        Object.assign(state.example, example);
    },
    updateList: function (state, example) {
        Object.assign(state.list, list);
    },
    updateList: function (state, example) {
        Object.assign(state.chosen, chosen);
    },
  },
})