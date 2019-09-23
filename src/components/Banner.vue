<template>
  <div :class="`banner ${button ? 'with-bottom' : ''}`">
    <slot />
    <div class="banner-bottom">
      <div class="banner-bottom-left"></div>
      <div class="banner-bottom-center">
        <a v-if=button class="banner-button" :href="`\#${target}`">{{ button }}</a>
      </div>
      <div class="banner-bottom-right">
        <Badge v-if=badge />
      </div>
    </div>
    <Graphics />
  </div>
</template>


<script>
import Badge from '~/components/Badge';
import Graphics from '~/components/Graphics';

export default {
  name: 'Banner',
  props: ['button', 'target', 'badge'],
  components: {
    Badge,
    Graphics,
  }
}
</script>

<style lang="scss">
.banner{
  // https://every-layout.dev/layouts/cover/
  display: flex;
  flex-direction: column;
  align-items: center; // Vertical centering
  min-height: $banner-height;
  padding: $stack-space;
  padding-top: $nav-height; // Center under nav height
  position: relative;
  font-size: 2.5em;
  text-align: center;
  @extend .c-white;
  @extend .shadow-text-light;
  box-shadow: inset $shadow-dark;
  & > * {
    margin-top: $stack-space;
    margin-bottom: $stack-space;
  }
  & > :first-child:not(h1):not(.graphics) {
    margin-top: 0;
  }
  & > :last-child:not(h1):not(.graphics) {
    margin-bottom: 0;
  }
  & > h1 {
    margin-top: auto;
    margin-bottom: auto;
  }
  & *:not(.graphics):not(.banner-bottom) {
    z-index: 50; // Show above blobs
  }
  &.with-bottom{
    margin-bottom: calc(4.5 * #{$stack-space});
    padding-bottom: calc(4.5 * #{$stack-space});
  }
}

.banner-bottom{
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  width: 100vw;
  margin: 0 !important;
  & > *:not(.banner-bottom-left){
    flex-basis: $column-width;
    margin-top: calc(.5 * #{$stack-space});
    margin-bottom: calc(.5 * #{$stack-space});
  }
  & > *{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-bottom-center{
    flex-grow: 1;
  }
  .banner-bottom-left{
    // Invisible element to center
    flex-basis: 0;
    flex-grow: 1;
    width: 100%;
    max-width: $badge-max-width;
    height: 0;
  }
}

.banner-button{
  width: max-content;
  margin-right: $stack-space;
  margin-left: $stack-space;
  position: relative; // For button overlay to show on it
  display: block;
  overflow: hidden;
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
