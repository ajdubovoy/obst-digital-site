<template>
  <nav class="nav">
    <g-link to="/">
      <LogoDark v-if=dark alt="Obst Digital" class="logo" />
      <LogoLight v-if=!dark alt="Obst Digital" class="logo" />
    </g-link>
  </nav>
</template>

<script>
import LogoDark from '~/assets/images/logo_dark.svg';
import LogoLight from '~/assets/images/logo_light.svg';
export default {
  name: 'Card',
  props: {
    dark: Boolean
  },
  components: {
    LogoDark,
    LogoLight
  }
}
</script>

<style scoped lang="scss">
.logo{
  width: 10.5rem;
}
</style>
