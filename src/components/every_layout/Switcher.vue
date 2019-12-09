<template lang="pug">
div(class="switcher")
  slot
</template>

<script>
import spacingProp from './helpers/spacing_prop'
export default {
  name: 'l-switcher',
  ...spacingProp
}
</script>

<style lang="scss">
.switcher{
  @each $name, $spacing in $spacings {
    & /deep/ > * {
      display: flex;
      flex-wrap: wrap;
      margin: ($spacing / 2) * -1;
    }

    & /deep/ > * > * {
      flex-grow: 1;
      flex-basis: calc((#{$measure} - (100% - #{$spacing})) * 999);
      margin: $spacing / 2;
    }

    & /deep/ > * > :nth-last-child(n+5),
    & /deep/ > * > :nth-last-child(n+5) ~ * {
      flex-basis: 100%;
    }
  }
}
</style>
