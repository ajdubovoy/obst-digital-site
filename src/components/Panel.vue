<template>
  <div class="panel">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style lang="scss">
.panel{
  width: 90%;
  max-width: calc(6 * #{$column-width});
  margin: 0 auto;
  height: max-content;
  background-color: $white;
  border-radius: $border-radius;
  @extend .shadow-box-dark;
  padding: $stack-space;
}
</style>
