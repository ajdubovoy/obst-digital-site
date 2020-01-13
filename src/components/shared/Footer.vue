<template lang="pug">
div(class="footer")
  slot
</template>

<script>
export default {
  name: 'l-footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    height: 300px;
  }
</style>
