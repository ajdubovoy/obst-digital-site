<template>
  <nav class="nav">
    <g-link to="/">
      <LogoDark v-if=dark alt="Obst Digital" class="logo" />
      <LogoLight v-if=!dark alt="Obst Digital" class="logo" />
    </g-link>
    <a href="#">
      <MenuIcon v-bind:class="[dark ? 'f-dark' : 'f-white', 'menu-icon']" />
    </a>
  </nav>
</template>

<script>
import LogoDark from '~/assets/images/logo_dark.svg';
import LogoLight from '~/assets/images/logo_light.svg';
import MenuIcon from '~/assets/images/menu_icon.svg'
export default {
  name: 'Card',
  props: {
    dark: Boolean
  },
  components: {
    LogoDark,
    LogoLight,
    MenuIcon
  }
}
</script>

<style lang="scss">
.nav{
  width: 100vw;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  & > *{
    display: block;
    z-index: 1000;
  }
}
.logo{
  height: 3rem;
}
.menu-icon{
  height: 1.5rem;
}
</style>
