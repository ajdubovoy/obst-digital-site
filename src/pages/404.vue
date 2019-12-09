<template lang="pug">
layout
  h1 404 - Not Found
    p
      | Sorry! We're working on it, but that fruit hasn't been planted yet...
      g-link(to="/")
        Go Home
</template>

<script>
export default {
  name: '404',
  metaInfo: {
    title: '404'
  }
}
</script>

<style lang="scss">
</style>
