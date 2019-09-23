<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss">
	.container{
	  max-width: $container-min-width;
	  min-width: $container-max-width;
	  margin: 0 auto;
	}
</style>
