<template>
    <div>
        <h2>Select</h2>
        <draggable v-model="list" :options="{group:'people'}" class="dragArea">
            <div v-for="element in list"><p>
            {{ element.name }}
            </p></div>
        </draggable>

        <h2>Chosen</h2>
        <draggable v-model="chosen" :options="{group:'people'}" class="dragArea">
            <div v-for="element in chosen"><p>
            {{ element.name }}
            </p></div>
        </draggable>

        <h3>Or add custom input</h3>
        <input v-model="custom"> <br />

        <button v-on:click="addCustomInput()">
            Add text
        </button> <br /><br />

        <button v-on:click="reset()">
           Reset
        </button>


        <h2>Terminal Output</h2>

        {{ bashOutput }}

        <h2>Code</h2>

        {{ bashCommands }}
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import { store } from '../../store/index';

export default {
  components: {
      draggable,
  },
  store: store,
  data () {
    return {
      custom: '',
    };
  },
  methods: {
    addCustomInput: function () {
      var customInput = {
          name: this.custom,
          bashCode: this.custom,
          output: this.custom,
          description: 'Custom input.'
      }

      this.$store.commit('addCustom', customInput);
    },
    reset: function() {
      this.$store.commit('reset');
    }
  },
  computed: {
    bashOutput: function() {
        var output = this.chosen.reduce(function(acc, test) {
            return acc + test.output + ' ';
        }, '');
       return output;
    },
    bashCommands: function() {
        var commands = this.chosen.reduce(function(acc, test) {
            return acc + test.bashCode + ' ';
        }, 'PS1=');
       return commands;
    },
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
            return this.$store.state.list
        },
        set(value) {
            this.$store.commit('updateList', value)
        }
    }
  }
};
</script>