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
            <draggable v-model="list" class="dragArea">
                <div v-for="element in value"><p>
                {{ element.name }}
                </p></div>
             </draggable>

             <h2>Chosen</h2>
             <draggable v-model="chosen" class="dragArea">
                <div v-for="element in valueChosen"><p>
                {{ element.name }}
                </p></div>
             </draggable>
         </div>

        <div class="normal">
            <h2>Normal v-for</h2>
            <div class="dragArea">
                <div v-for="element in value">{{element.name}}</div>
             </div>
         </div>
         <pre>{{ value }}</pre>
         <pre>{{ valueChosen }}</pre>
    
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
      example: this.$store.state.example
    };
  },
  methods: {
   updateField(field, value) {
     this.$store.commit('updateUser', {
     	[field]: value
     });
   },
  },
  computed: {
    fullName: function () {
        return this.$store.state.example
    },
    value: (state) => state.$store.getters.value,
    valueChosen: (state) => state.$store.getters.valueChosen,
    chosen: {
      get() {
        const self = this;

        const arrayChangeHandler = {
          get(target, property) {
            return target[property];
          },
          set(target, property, value) {
            target[property] = valueChosen;

            self.$store.commit({
              type: 'INPUT',
              list: target,
            });

            return true;
          },
        };

        return new Proxy([...this.value], arrayChangeHandler);
      },
      set(newValue) {
        this.$store.commit({
          type: 'INPUT',
          chosen: target,
        });
      },
    },
    list: {
      get() {
        const self = this;

        const arrayChangeHandler = {
          get(target, property) {
            return target[property];
          },
          set(target, property, value) {
            target[property] = value;

            self.$store.commit({
              type: 'INPUT',
              list: target,
            });

            return true;
          },
        };

        return new Proxy([...this.value], arrayChangeHandler);
      },
      set(newValue) {
        this.$store.commit({
          type: 'INPUT',
          list: target,
        });
      },
    },
  },
};
</script>