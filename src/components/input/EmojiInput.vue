<template>
    <div>
        <center>
            <VPopover>
                <button class="button tooltip-target b3">
                    add ✨emoji✨
                </button>
                
                <template slot="popover">
                    <Picker set="emojione" @click="addEmoji" title='Pick your emoji…' emoji='point_up' />
                </template>
            </VPopover>
        </center>
    </div>
</template>

<script>
import { store } from '../../../store/index';
import { VPopover } from 'v-tooltip';
import { Picker } from 'emoji-mart-vue';

export default {
  components: {
      Picker,
      VPopover,
  },
  store: store,
  data () {
    return {
      emoji: '',
    };
  },
  methods: {
    addEmoji (emoji) {
        var emojiInput = {
          name: emoji.native,
          bashCode: emoji.native,
          output: emoji.native,
          description: 'Custom emoji input.',
          color: '',
          bgColor: '',
          fgAnsi: '',
          bgAnsi: '',
      }
        this.$store.commit('addCustom', emojiInput);
    },
  },
};
</script>
