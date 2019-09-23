<template>
  <div class="switcher">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Switcher'
}
</script>

<style lang="scss">
// https://every-layout.dev/layouts/switcher/ (approximated)
.switcher {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  & > * {
    flex-basis: $column-width;
    flex-grow: 1;
    margin: $stack-space;
  }
}

</style>
