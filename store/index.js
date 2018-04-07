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
        output: 'acidburn'
      },
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
    INPUT (state, { list }) {
        state.list = [...list];
    },
    INPUTCHOSEN (state, { list }) {
        state.chosen = [...chosen];
    },
  },
  getters: {
    value: (state) => state.list,
    valueChosen: (state) => state.chosen,
  }
})