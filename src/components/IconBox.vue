<template>
	<div class="icon-box">
		<slot />
	</div>
</template>

<script>
export default {
  name: 'IconBox',
  props: {
    img: String
  }
}
</script>

<style lang="scss">
.icon-box {
  h4 {
    font-family: $header-font;
    font-size: 1.6rem;
    color: $blue;
  }
  img{
    max-width: $column-width;
  }
}
</style>
