<template>
  <div id="app">
    <h1>Bash Prompt Editor</h1>

    <div class="preview-code">
      <h2>Preview</h2>
      <Preview />

      <h2>Code</h2>
      <Code />

      <h2>How to</h2>
      <HowTo />
    </div>

    <div class="element-picker">
      <ElementPicker />
    </div>
  </div>
</template>

<script>
import ElementPicker from './components/ElementPicker';
import Preview from './components/Preview.vue';
import Code from './components/Code.vue';
import HowTo from './components/HowTo.vue';

export default {
  components: {
    ElementPicker,
    Preview,
    Code,
    HowTo
  },
};
</script>

<style>
h1 {
  text-align: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #38999A;
}
</style>
