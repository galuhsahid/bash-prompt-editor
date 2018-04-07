<template>
    <vue-static-terminal :header="terminal.header"
                 :prompt="terminal.prompt"
                 :commands="terminal.commands">

      <bash-example :example="rootatacidburn">
        {{ example }}
      </bash-example>
    </vue-static-terminal>


</template>

<script>
import VueStaticTerminal from 'vue-static-terminal';
import 'vue-static-terminal/dist/vue-static-terminal.css';
import BashExample from './BashExample.vue'

export default {
  data: () => ({
    terminal: {
      header: {
        text: 'Bash Prompt Editor',
        toolbar: '&#x2715;',
      },
      prompt: '/ >',
      commands: [
        { command: 'ls', result: 'file1 file2' },
        { command: 'whoami', result: 'root' }
      ],
    },
  }),
  computed: {
    isSelected() {
      return this.$store.state.selectedMethod
    }
  },
  components: {
    VueStaticTerminal,
    BashExample,
  },
};
</script>
