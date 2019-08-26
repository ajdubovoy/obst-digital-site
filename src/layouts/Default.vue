<template>
  <div class="layout">
    <header class="header">
      <Navbar :dark=true />
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
