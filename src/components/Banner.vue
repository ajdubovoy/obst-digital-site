<template>
  <div class="banner">
    <slot />
    <a v-if=button class="banner-button" :href="`\#${target}`">{{ button }}</a>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: ['button', 'target']
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
  margin-bottom: 4.5rem;
  box-shadow: inset $shadow-dark;
}
.banner-button{
  z-index: 1;
  overflow: hidden;
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
  transition: box-shadow 500ms ease-out-in-out, background-color 500ms ease-in-out, color 500ms ease-in-out;
  &:hover{
    @extend .shadow-box-dark;
    &::before {
      transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
    }
  }
  &:active{
    @extend .shadow-box-dark;
    color: darken( white, 10% );
    &::before {
      transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
      background-color: darken( $red, 30% );
    }
  }
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: darken( $red, 15% );
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 500ms ease-in-out, background-color 250ms ease-in-out;
  }
}
</style>
