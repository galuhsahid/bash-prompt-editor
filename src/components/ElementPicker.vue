<template>
    <div>
        <h2>Available Elements</h2>
        <draggable v-model="list" :options="{group:{ name:'elements',  pull:'clone', put: () => true}}" class="elements">
            <div v-for="element in list">
                <div class="element">
                    {{ element.name }}
                </div>
            </div>
        </draggable>

        <div id="selected-elements">
        <h2>Selected Elements</h2>
        <draggable v-model="chosen" :options="{group:'elements'}" class="elements">
            <div v-for="element in chosen">
                <v-popover>
                    <div @click="setName(element.name)"><div class="selected-element">{{ element.name }}</div></div>
                        
                    <template slot="popover">
                        <h3 class="palette-popover">Foreground</h3>
                        <compact-picker :value="color" :palette="palette" @input="updateFromPicker" :ref=element.name></compact-picker>
                    </template>

                    <template slot="popover">
                        <h3 class="palette-popover">Background</h3>
                        <compact-picker :value="color" :palette="palette" @input="updateBgFromPicker" :ref=element.name></compact-picker>
                    </template>
                </v-popover>
            </div>
        </draggable>
        </div>
            
        <div class="etc">
            <h2>More</h2>
            <CustomInput />

            <EmojiInput />

            <button class="button" v-on:click="reset()">reset</button>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import compact from 'vue-color/src/components/Compact.vue'
import { store } from '../../store/index';
import { VPopover } from 'v-tooltip';
import EmojiInput from './input/EmojiInput.vue';
import CustomInput from './input/CustomInput.vue';

var convert = require('color-convert');

export default {
  components: {
      'draggable': draggable,
      'compact-picker': compact,
      'v-popover': VPopover,
      EmojiInput,
      CustomInput,
  },
  store: store,
  data () {
    return {
      color: '',
      custom: '',
      activeElement: {
          'name': '',
          'color': '',
          'fgAnsi': '',
          'bgAnsi': '',
          'bgColor': '',
      },
      emoji: '',
    };
  },
  methods: {
    reset: function() {
      this.$store.commit('reset');
    },
    updateFromPicker(color) {
        // Get hex
        var hex = color.hex;
        // Get ansi code
        var ansi = this.$store.getters.getColorByHex(hex).ansi;
        this.activeElement.color = hex;
        this.activeElement.fgAnsi = ansi;
        this.$store.commit('changeColor', this.activeElement);
    },
    updateBgFromPicker(color) {
        // Get hex
        var hex = color.hex;
        // Get ansi code
        var ansi = this.$store.getters.getColorByHex(hex).ansi;
        this.activeElement.bgColor = hex;
        this.activeElement.bgAnsi = ansi;
        console.log(this.activeElement);
        this.$store.commit('changeBgColor', this.activeElement);
    },
    setName(name) {
        this.activeElement.name = name;
    }
  },
  computed: {
    chosen: {
        get() {
            return this.$store.state.chosen
        },
        set(value) {
            this.$store.commit('updateChosen', value)
        }
    },
    list: {
        get() {
            return [...new Set(this.$store.state.list)]
        },
        set(value) {
            this.$store.commit('updateList', value)
        }
    },
    palette: {
        get() {
            return this.$store.getters.palette;
        }
    }
  }
};
</script>