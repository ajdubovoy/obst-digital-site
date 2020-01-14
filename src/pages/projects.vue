<template lang="pug">
    l-stack
      div.bar
        div.top
          a#back(href="/") Back
        div.top
          p Case Study: Artyque.
        div.top
      .fullwidth
        br
        br
        br
        g-image(src="~/assets/images/new.png")
        g-image(src="~/assets/images/art2.png")
        g-image(src="~/assets/images/art3.png")
        g-image(src="~/assets/images/art4.png")
        g-image(src="~/assets/images/art5.png")
        g-image(src="~/assets/images/art7.png")

</template>

<script>
export default {
  name: 'index',
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss" scoped>
  .fullwidth {
    background: color(blue);
    img {
      width: 100vw;
    }
  }
  .bar {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    color: color(white);
    background: color(blue);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .bar a {
    background: color(white);
    color: color(blue);
    padding: 15px 35px;
    margin-left: 30px;
  }
</style>
