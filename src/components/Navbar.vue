<template>
  <nav>
    <div :class="`nav ${darkMode ? 'dark' : 'light'} ${filled ? 'filled' : 'unfilled'}`">
      <g-link to="/" :class="logoShown ? 'o o-1' : 'o o-0'">
        <g-image v-if=darkMode src="~/assets/images/logo_dark.svg" alt="Obst Digital" />
        <g-image v-if=!darkMode src="~/assets/images/logo_light.svg" alt="Obst Digital" />
      </g-link>
      <a href="#">
        <MenuIcon v-bind:class="[darkMode ? 'f-dark' : 'f-white', 'menu-icon']" />
      </a>
    </div>
    <g-link to="/" v-if=topfruit :class="logoShown ? 'o o-0' : 'o o-1'">
      <g-image src="~/assets/images/top_fruit.svg" class="topfruit" alt="Obst Digital" />
    </g-link>
  </nav>
</template>

<script>
import MenuIcon from '~/assets/images/menu_icon.svg'
export default {
  name: 'Card',
  props: {
    dark: Boolean,
    topfruit: Boolean
  },
  components: {
    MenuIcon
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY >= 225) {
        if (this.topfruit) {
          this.logoShown = true;
        }

        if (!this.dark) {
          if (window.scrollY >= 550) {
            this.darkMode = false;
          } else {
            this.darkMode = true;
          }
        }

        this.filled = true;
      } else {
        if (this.topfruit) {
          this.logoShown = false;
        }

        this.filled = false;

        if (!this.dark) {
          this.darkMode = false;
        } else {
          this.darkMode = true;
        }
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data: function () {
    return {
      logoShown: !this.topfruit,
      filled: false,
      darkMode: this.dark
    }
  }
}
</script>

<style lang="scss">
.nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: $nav-height;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5000;
  & > *{
    display: block;
    z-index: 5500;
  }
  .logo{
    height: 3rem;
  }
  .menu-icon{
    height: 1.5rem;
  }
  transition: background-color 500ms ease, box-shadow 500ms ease;
  &.unfilled{
    background-color: transparent;
  }
  &.filled{
    backdrop-filter: blur(10px);
    &.dark{
      background-color: rgba($white, 0.5);
      @extend .shadow-box-dark;
    }
    &.light{
      background-color: rgba($black, 0.5);
      @extend .shadow-box-dark;
    }
  }
}
.topfruit{
  position: fixed;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  height: $nav-height;
  z-index: 5500;
}
</style>
