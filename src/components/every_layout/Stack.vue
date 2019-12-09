<template lang="pug">
div(:class=`{
  stack: true,
  expanded,
  reduced
}`)
  slot
</template>

<script>
import spacingProp from './helpers/spacing_prop';

export default {
  name: 'l-stack',
  props: {
    ...spacingProp
  }
}
</script>

<style lang="scss">
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  /deep/ & > * {
    margin-top: 0;
    margin-bottom: 0;
  }
}

@each $name, $spacing in $spacings {
  /deep/ .#{$name} > * + * {
    margin-top: $spacing;
  }
}

</style>
