<template lang="pug">
div(:class="`cluster ${spacing}`")
  slot
</template>

<script>
import spacingProp from './helpers/spacing_prop';

export default {
  name: 'l-cluster',
  props: {
    ...spacingProp
  }
}
</script>

<style lang="scss" scoped>
.cluster {
  overflow: hidden;
  & /deep/ > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: spacing(sm) / 2 * -1;
  }
}

@each $name, $spacing in $spacings {
  .#{$name} {
    & /deep/ > * {
      margin: $spacing / 2 * -1;
      & /deep/ > * {
        margin: $spacing / 2;
      }
      
    }
  }
}
</style>
