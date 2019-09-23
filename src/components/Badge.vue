<template>
	<div class="lw-badge">
		<g-image class="logo-lw" src="~/assets/images/lewagon.png"/>
		<slot />
	</div>
</template>

<script>
export default {
  name: 'Badge'
}
</script>

<style lang="scss">
.logo-lw {
  height: 78px;
  margin-right: 22px;
}
.lw-badge {
  font-size: 12px;
  padding: 15px;
  margin: 25px;
  display: flex;
  width: 260px;
  position: absolute;
  height: 110px;
  background: white;
  z-index: 1000;
  border-radius: 4px;
  right: 0;
  box-shadow: 1px 1px 17px #00000030;
  bottom: -60px;
  h1 {
  	font-family: $main-font;
    color: #000000;
    margin-top: 14px;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
  }
  &:hover {

  }
}
</style>