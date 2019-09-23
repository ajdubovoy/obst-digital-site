<template>
	<div class="badge">
		<g-image class="badge-logo" src="~/assets/images/lewagon.png"/>
    <h1>Le Wagon Berlin Official Partner</h1>
	</div>
</template>

<script>
export default {
  name: 'Badge'
}
</script>

<style lang="scss">
.badge-logo {
  height: 4.875rem;
  margin-right: 0.5rem;
}
.badge {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: auto;
  max-width: $badge-max-width;
  height: auto;
  margin: 0 1.5rem;
  background: $white;
  border-radius: $border-radius;
  @extend .shadow-box-dark;
  & > * {
  	font-family: $main-font;
    color: $black;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
  &:hover {

  }
}
</style>
