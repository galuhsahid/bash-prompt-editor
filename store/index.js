import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let availableCommands = [
    {
      name: 'username',
      bashCode: '\\u ',
      output: 'root',
      description: 'Current username.'
    },
    {
      name: 'shell',
      bashCode: '\\s ',
      output: 'bash',
      description: 'Current shell.'
    },
    {
      name: 'shell version',
      bashCode: '\\v ',
      output: '4.2',
      description: 'Current shell version.'
    },
    {
        name: 'hostname',
        bashCode: '\\h',
        output: 'acidburn',
        description: 'The hostname of the machine.'
    }, {
        name: 'current directory path',
        bashCode: '\\w ',
        output: '~/dir',
        description: 'Path to the current working directory.'
    },
  ];

let initChosen = availableCommands.slice(0,3);
let initCommands = availableCommands.slice(3,);

export const store = new Vuex.Store({
  strict: true,
  state: {
    example:
        {
            output: '',
            commands: ''
        },
    chosen: initChosen,
    list: initCommands,
  },
  mutations: {
    updateChosen: function (state, chosen) {
        state.chosen = chosen;
    },
    updateList: function (state, list) {
        state.list = list;
    },
    addCustom: function (state, chosen) {
        state.chosen.push(chosen);
    },
    reset: function (state) {
        Vue.set(state, 'list', availableCommands);
        Vue.set(state, 'chosen', []);
    },
  },
})