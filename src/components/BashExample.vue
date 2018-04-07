<template>
    <p>{{example}}</p>
</template>

<script>
export default {
  name: 'bash-example',
  props: {
    example: {
      type: String,
      default: 'acidburn'
    }
  }
}
</script>