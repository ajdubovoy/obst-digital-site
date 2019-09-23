<template>
	<div class="icon-box">
    <g-image v-if="icon_url === 'webevelopment'" src="~/assets/images/icon1.svg" />
    <g-image v-if="icon_url === 'design'" src="~/assets/images/lewagon.png" />
    <g-image v-if="icon_url === 'TeamBuilding'" src="~/assets/images/lewagon.png" />
		<slot />
	</div>
</template>

<script>
export default {
  name: 'IconBox',
  props: {
    icon_url: String
  }
}
</script>
