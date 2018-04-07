/* eslint-disable */

<template>
    <div id="app">
        <div class="drag">
        <h2>Chosen</h2>
        <draggable v-model="list" class="dragArea" :options="{group:'people'}">
        <div v-for="element in list">{{element.name}}</div>
        </draggable>
        <h2>Available options</h2>
        <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
        <div v-for="element in list2">{{element.name}}</div>
        </draggable>
        </div>

        <div class="normal">
            <h2>List 1 v-for</h2>
            <div>
                <div v-for="element in list">{{element.name}}</div>
                </div>

            <h2>List 2 v-for</h2>
            <div>
                <div v-for="element in list2">{{element.name}}</div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import { store } from '../../store/index';

export default {
  data () {
    return {
      list: [{
        name: "username"
        }],
        list2: [{
        name: "hostname"
        }, {
        name: "shell"
        }, {
        name: "shell version"
        }]
    }
  },
  methods: {
    add: function() {
      this.list.push({
        name: 'Juan'
      });
    },
    replace: function() {
      this.list = [{
        name: 'Edgard'
      }]
    }
  },
  components: {
    draggable,
  },
  watch: {
    list() {
      this.$store.commit('resetSelection')
    },
  },
  computed: {
    addOptions() {
      return this.$store.state.basic
    }
  }
};
</script>
