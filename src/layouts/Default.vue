<template>
  <div class="layout">
    <header class="header">
      <Navbar :dark=dark />
    </header>
    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  props: ["dark"]
}
</script>

<style lang="scss">
.main{
  padding-bottom: $stack-space;
}
</style>
