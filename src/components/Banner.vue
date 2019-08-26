<template>
  <div class="banner">
    <slot />
    <a v-if=button class="banner-button" href="#main-content">{{ button }}</a>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: ['button']
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
  position: relative;
  margin-bottom: 3rem;
  box-shadow: inset $shadow-dark;
}
.banner-button{
  display: block;
  position: absolute;
  bottom: -1.5rem;
  font-size: 1.5rem;
  background-color: $red;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  color: $white;
  text-decoration: none;
  font-family: $monospace-font;
  font-weight: 200;
  text-transform: uppercase;
  @extend .shadow-box-light;
  transition: box-shadow 250ms ease-out, background-color 250ms ease-out;
  &:hover{
    @extend .shadow-box-dark;
    background-color: darken( $red, 10% );
  }
  &:active{
    @extend .shadow-box-dark;
    background-color: darken( $red, 25% );
    color: darken( white, 10% );
  }
}
</style>
