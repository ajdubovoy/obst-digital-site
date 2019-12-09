<template lang="pug">
div(
:class=`{
  grid: true,
  aboveMin
}` 
ref="grid"
)
  slot
</template>

<script>
export default {
  name: 'l-grid',
  mounted: function observeGrid() {
    // Feature detect ResizeObserver
    if ('ResizeObserver' in window && !CSS.supports('width', `min(${this.min}, 100%)`)) {
      // Find the grid
      const gridNode = this.$refs.grid;
      // Get the min value from data
      const min = this.min;
      // Create a proxy element to measure and convert
      // the `min` value (which might be em, rem, etc) to `px`
      const test = document.createElement('div');
      test.style.width = min;
      gridNode.appendChild(test);
      const minToPixels = test.offsetWidth;
      gridNode.removeChild(test);

      const ro = new ResizeObserver(entries => {
        for (let entry of entries) {
          // Get the element's current dimensions
          const cr = entry.contentRect;
          // `true` if the container is wider than the minimum
          this.aboveMin = cr.width > minToPixels;
        }
      });

      ro.observe(gridNode);
    }
  },
  data() {
    return {
      min: "30ch",
      aboveMin: false
    }
  }
}
</script>

<style lang="scss" scoped>
$columns: $measure / 2;

.grid {
  display: grid;
  grid-gap: spacing(sm);
  grid-template-columns: 100%;

  // `unquote` functions used to prevent conflict with SASS min/max functions: https://sass-lang.com/documentation/syntax/special-functions#min-and-max
  @supports (width: unquote("min(#{$columns}, 100%)")) {
    & {
    grid-template-columns: repeat(auto-fit, unquote("minmax(min(#{$columns}, 100%), 1fr)"));
    }
  }
}

.aboveMin {
  grid-template-columns: repeat(auto-fill, unquote("minmax(#{$columns}, 1fr)"));
}
</style>
