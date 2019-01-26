<template>
    <div class="code">
        {{ bashCommands }}
        <button class="button" type="button" style="float: right;font-size: 0.6em;margin: 0;" v-clipboard:copy="bashCommands">Copy!</button>
    </div>
</template>

<script>
import { store } from '../../store/index';

export default {
  store: store,
  computed: {
    bashCommands: function() {
        var commands = this.chosen.reduce(function(prompt, test) {

        var fgPrefix = '';
        var bgPrefix = '';
        var suffix = '';
        var code = test.bashCode;

        if (test.fgAnsi !== "") {
            fgPrefix = "\\e[38;5;" + test.fgAnsi + "m";
        }

        if (test.bgAnsi !== "") {
            bgPrefix = "\\e[48;5;" + test.bgAnsi + "m";
        }

        if (test.fgAnsi !== "" || test.bgAnsi !== "") {
            suffix = "\\e[0m";
        }
        
        return prompt + fgPrefix + bgPrefix + code + suffix;

        }, '');
       return "export PS1=\"" + commands+ '"';
    },
    chosen: {
        get() {
            return this.$store.state.chosen;
        },
        set(value) {
            this.$store.commit('updateChosen', value);
        }
    }
  }
};
</script>

<style>
    .code {
        padding: 10px 20px;
        margin: 20px 0;
        background: #333;
        transition: 0.2s all ease;
        display: block;
        border-radius: 5px;
        line-height: 1.8em;
        font-family: monospace;
        font-size: 1.5em;
        overflow: auto;
    }

    .vc-compact {
        width: 500px;
    }

    .palette-popover {
        background-color: #fff;
    }

    .element {
        background-color: #FF4B48;
        border-radius: 2px;
        padding: 5px;
        margin: 5px;
        color: #000;
        display: inline-block;
        float: left;
        cursor: pointer;
    }

    .selected-element {
        background-color: #90DDF7;
        border-radius: 2px;
        padding: 5px;
        margin: 5px;
        color: #000;
        display: inline-block;
        float: left;
        cursor: pointer;
    }

    .element-picker {
        width: 45%;
        display: inline-block;
        padding-left: 20px;
    }

    .preview-code {
        width: 50%;
        float: left;
        display: inline-block;
    }

    .elements {
        margin: 10px;
        clear: left;
        display: block;
        overflow: auto;
        min-height: 50px;  /* must set min height to allow dragging components while list is empty */
        border: 1px #999999 solid;
        border-radius: 5px;
    }

    #selected-elements{
        display: block;
        clear: left;
        padding-top: 10px;
    }

    .etc {
        clear: left;
        display: block;
        margin: 10px;
        padding-top: 10px;
    }
    
    .trigger {
        float: left;
    }

    .button {
        background-color: #5DE071;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        border-radius: 2px;
        padding: 5px;
        margin: 5px;
        border: #000 solid 2px;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
    }

    h3 {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;  
    }
</style>