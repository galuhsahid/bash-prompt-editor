<template>
    <div>
        <v-popover>
          <button class="button">
                add custom text
          </button>
              
          <template slot="popover">
              <input v-model="custom"> 
              <button class="button" v-on:click="addCustomInput()">
                add
              </button>
          </template>
        </v-popover>
    </div>
</template>

<script>
import { store } from '../../../store/index';
import { VPopover } from 'v-tooltip';

export default {
  store: store,
  data () {
    return {
      custom: '',
    };
  },
  components: {
      'v-popover': VPopover,
  },
  methods: {
    addCustomInput: function () {
      var customInput = {
          name: this.custom,
          bashCode: this.custom,
          output: this.custom,
          description: 'Custom input.',
          color: '',
          bgColor: '',
          fgAnsi: '',
          bgAnsi: '',
      }

      this.$store.commit('addCustom', customInput);
    },
  },
};
</script>