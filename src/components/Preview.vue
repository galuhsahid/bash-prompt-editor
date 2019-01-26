<template>
    <div class="code">
        <span v-for="element in chosen" :id="element.name" :style="{'background-color': element.bgColor, 'color': element.color}">{{element.output}}</span>
    </div>
</template>

<script>
import { store } from '../../store/index';

export default {
  store: store,
  data () {
    return {
      color: '',
      colorValue: '',
      custom: '',
      activeElement: {
          'name': '',
          'color': '',
          'fgAnsi': 0,
          'bgAnsi': '',
          'bgColor': '',
      },
      code: '',
    };
  },
  computed: {
    chosen: {
        get() {
            return this.$store.state.chosen
        },
    },
  }
};
</script>

<style>
    .code {
        padding: 10px 20px;
        margin: 20px 0;
        background: #333;
        color: #eee;
        transition: 0.2s all ease;
        display: block;
        border-radius: 5px;
        line-height: 1.8em;
        font-family: monospace;
        font-size: 1.5em;
        overflow: auto;
    }
</style>