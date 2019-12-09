<template lang="pug">
div(
:class=`{ 
  'with-sidebar': true, 
  right: reversed,
  left: !reversed
}`
)
  slot
</template>

<script>
export default {
  name: 'l-sidebar',
  props: {
    reversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.with-sidebar {
  overflow: hidden;

  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: spacing(sm) / 2 * -1;
    overflow: hidden;
  }

  & > * > * {
    margin: spacing(sm) / 2;
    flex-grow: 1;
  }

  &.right {
    flex-wrap: wrap-reverse;
    & > * > :first-child {
      flex-basis: 0;
      flex-grow: 999;
      min-width: calc(35% - #{spacing(sm)});
    }
  }

  &.left {
    & > * > :last-child {
      flex-basis: 0;
      flex-grow: 999;
      min-width: calc(50% - #{spacing(sm)});
    }
  }
}
</style>
