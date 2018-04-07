<template>
  <div id="app">
    <h1>Bash Prompt Editor</h1>
    <Play />
  </div>
</template>

<script>
import Terminal from './components/Terminal';
import Elements from './components/Elements';
import Play from './components/Play';

export default {
  components: {
    Terminal,
    Elements,
    Play,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
