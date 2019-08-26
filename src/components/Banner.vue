<template>
  <div class="banner">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss">
.banner{
  min-height: 75vh;
  width: 100vw;
  background-color: $blue;
  margin-top: -5rem;
  @extend .c-white;
  @extend .shadow-text-light;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
