<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss">
.container{
  max-width: 60ch;
  margin: 0 auto;
}
</style>
