<template lang="pug">
div(class="cover")
  slot
</template>

<script>
export default {
  name: 'l-cover'
}
</script>

<style lang="scss" scoped>
.cover {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  padding: spacing(sm);

  & /deep/ > * {
    margin-top: spacing(sm);
    margin-bottom: spacing(sm);
  }

  & /deep/ > :first-child:not(h1) {
    margin-top: 0;
  }

  & /deep/ > :last-child:not(h1) {
    margin-bottom: 0;
  }

  & /deep/ > h1 {
    margin-bottom: auto;
  }
}
</style>
