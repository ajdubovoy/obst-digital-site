<template>
  <nav class="nav">
    <g-link to="/">
      <g-image v-if=dark src="~/assets/images/logo_dark.svg" alt="Obst Digital" />
      <g-image v-if=!dark src="~/assets/images/logo_light.svg" alt="Obst Digital" />
    </g-link>
  </nav>
</template>

<script>
export default {
  name: 'Card',
  props: {
    dark: Boolean
  }
}
</script>
