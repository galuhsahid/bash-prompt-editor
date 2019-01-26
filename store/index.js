import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var convert = require('color-convert');

function loadColors() {
    var colors = [];

    for (var ansi = 16; ansi < 256; ansi++) {
        var hex = convert.ansi256.hex(ansi);
        var color = {
            ansi: ansi,
            hex: '#'+hex
        }
        colors.push(color);  
    }

    return colors;
}

function getTodaysDate() {
    var date = Date().split(" ").slice(0,3);
        var return_date = date[0];
        for (var i = 1; i < date.length; i += 1)
        {
            return_date += " " + date[i];
        }
    return return_date;
}

function getTime(clock, withSeconds) {
    var date = new Date();
    var hours;
    var minutes;
    var seconds;
    var time;
    var amPm;

    minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    
    if (clock == 12) {
        hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        hours = hours < 10 ? "0" + hours : hours;
    } else if (clock == 24) {
        hours = date.getHours();
    }
    
    if (withSeconds == true) {
        seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        time = hours + ":" + minutes + ":" + seconds;
    } else {
        time = hours + ":" + minutes;
        if (clock == 12) {
            amPm = date.getHours() >= 12 ? "PM" : "AM";
            time = time + " " + amPm;
        }
        
    }
    
    return time;
}

let availableCommands = [
    {
        name: 'username',
        bashCode: '\\u',
        output: 'betty',
        description: 'Current username.',
        color: '#fff',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: '@',
        bashCode: '@',
        output: '@',
        description: '',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'hostname',
        bashCode: '\\h',
        output: 'ENIAC',
        description: 'The hostname of the machine, up to the first .',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    }, 

    {
        name: 'space',
        bashCode: ' ',
        output: ' ',
        description: 'Space.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'shell',
        bashCode: '\\s',
        output: 'bash',
        description: 'The name of the shell.',
        color: '#fff',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'shell version',
        bashCode: '\\v',
        output: '4.2',
        description: 'The version of Bash.',
        color: '#fff',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'current directory path',
        bashCode: '\\w',
        output: '~/dir',
        description: 'Path to the current working directory.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'full hostname',
        bashCode: '\\H',
        output: 'host.domain.com',
        description: 'Fully Qualified Domain Name of the host.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'shell release',
        bashCode: '\\V',
        output: '4.2.42',
        description: 'The release of Bash, version + patch level.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'current directory',
        bashCode: '\\W',
        output: 'dir',
        description: 'Current working directory.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'date',
        bashCode: '\\d',
        output: getTodaysDate(),
        description: 'The date, in "Weekday Month Date" format.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'number of jobs',
        bashCode: '\\j',
        output: 2,
        description: 'The number of jobs currently managed by the shell.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'time (12-hour, HH:MM:SS)',
        bashCode: '\\T',
        output: getTime(12, true),
        description: 'The current time in 12-hour HH:MM:SS format.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'time (24-hour, HH:MM)',
        bashCode: '\\A',
        output: getTime(24, false),
        description: 'The current time in 24-hour HH:MM format.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'time (24-hour, HH:MM:SS)',
        bashCode: '\\t',
        output: getTime(24, true),
        description: 'The current time in 24-hour HH:MM format.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
    {
        name: 'time (12-hour, HH:MM)',
        bashCode: '\\@',
        output: getTime(12, false),
        description: 'The current time in 12-hour am/pm format.',
        color: '',
        fgAnsi: '',
        bgColor: '',
        bgAnsi: '',
    },
  ];

let initChosen = availableCommands.slice(0,4);
let initCommands = availableCommands;
let colors = loadColors();

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
    colors: colors,
  },
  mutations: {
    changeColor: function(state, payload) {
        var element = this.getters.getElementByName(payload.name);
        element.color = payload.color;
        element.fgAnsi = payload.fgAnsi;
    },
    changeBgColor: function(state, payload) {
        var element = this.getters.getElementByName(payload.name);
        element.bgColor = payload.bgColor;
        element.bgAnsi = payload.bgAnsi;
    },
    updateChosen: function (state, chosen) {
        state.chosen = chosen;
    },
    updateList: function (state, list)  {
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
  getters: {
    getElementByName: (state) => (name) => {
      return state.chosen.find(element => element.name === name)
    },
    getColorByHex: (state) => (hex) => {
      return state.colors.find(color => color.hex === hex)
    },
    palette: state => {
        colors = state.colors;
        return colors.map(color => color.hex)
    },
  }
})
