<template lang="pug">
  layout
    l-cover#banner
      .color
      .color
      transition(name="fade" appear)
        h1 
          #logo
            g-image(src="~/assets/images/logo_light.svg")
          span(class="highlight")
            | Making
          |  is at our Core
      p
        a(
        href="mailto:contact@obst.digital"
        target="_blank"
        )
          | Contact us
        span
          |  to learn more
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
#banner {
  position: absolute;
}

h1 {
  color: color(white);
  font-size: calc(3rem + 10vh);
  text-transform: uppercase;
}

p {
  font-size: 1.25em;
}

a, a:visited {
  color: color(red);
  text-decoration: none;
}

.highlight {
  text-decoration: underline;
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.15em;
  text-decoration-color: color(blue);
}

.color {
  position: absolute;
  z-index: z(background);
  width: 100vw;
  height: 50%;
  left: 0;
  margin: 0;
  &:first-child {
    background-color: color(red);
    top: 0;
  }
  &:nth-child(2){
    background-color: color(yellow);
    top: 50%;
  }
}

// Transition
.fade-enter-active, .fade-leave-active {
  $duration: 500ms;
  transition: opacity $duration ease, transform $duration ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
</style>
