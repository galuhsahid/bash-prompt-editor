<template>
    <div>
        <p>
        output: {{ example.output }}<br />
        commands: {{ example.commands }}
        </p>
        <input :value="example.output" v-on:keyup.stop="updateField('output', $event.target.value)" />
        <input :value="example.commands" v-on:keyup.stop="updateField('commands', $event.target.value)"/>
        
        <div class="drag">
            <h2>Draggable </h2>
            <draggable v-model="list" :options="{group:'people'}" class="dragArea">
                <div v-for="element in list"><p>
                {{ element.name }}
                </p></div>
             </draggable>

             <h2>Chosen</h2>
             <draggable  v-model="chosen" :options="{group:'people'}" class="dragArea">
                <div v-for="element in chosen"><p>
                {{ element.name }}
                </p></div>
             </draggable>
         </div>

         <h2>List 1 v-for</h2>
            <div>
                <div v-for="element in list">{{element.name}}</div>
             </div>

            <h2>List 2 v-for</h2>
            <div>
                <div v-for="element in chosen">{{element.name}}</div>
            </div>
        </div>
    
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
      list: this.$store.state.list,
      chosen: this.$store.state.chosen,
      example: this.$store.state.example
    };
  },
  methods: {
   updateField(field, value) {
     this.$store.commit('updateUser', {
     	[field]: value
     });
   },
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
  computed: {
    fullName: function () {
        return this.$store.state.example
    },
    chosen: {
          get() {
            return this.$store.state.chosen
        },
        set(value) {
            this.$store.commit('updateList', value)
        }
    },
      list: {
          get() {
            return this.$store.state.list
        },
        set(value) {
            this.$store.commit('updateChosen', value)
        }
      }
  }
};
</script>