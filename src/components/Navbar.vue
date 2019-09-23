<template>
  <nav class="nav">
    <g-link to="/">
      <g-image v-if=dark src="~/assets/images/logo_light.svg" alt="Obst Digital" />
      <g-image v-if=!dark src="~/assets/images/logo_light.svg" alt="Obst Digital" />
    </g-link>
    <a href="#">
      <MenuIcon v-bind:class="[dark ? 'f-dark' : 'f-white', 'menu-icon']" />
    </a>
  </nav>
</template>

<script>
import MenuIcon from '~/assets/images/menu_icon.svg'
export default {
  name: 'Card',
  props: {
    dark: Boolean
  },
  components: {
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
    img {
      max-width: 190px;
    }
  }
  .logo{
    height: 3rem;
  }
  .menu-icon{
    height: 1.5rem;
  }
</style>