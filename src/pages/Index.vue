<template lang="pug">
  layout
    l-cover#banner
      transition(name="slide" appear)
        .color
      transition(name="slide" appear)
        .color
      transition(name="fade" appear)
        h1 
          #logo
            g-image(src="~/assets/images/logo_light.svg")
          span(class="highlight")
            | Making
          |  is at our Core
      transition(name="fadeSlow" appear)
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
  font-size: calc(3rem + 10vw);
  text-transform: uppercase;
}

p {
  font-size: 1.25em;
  font-weight: 100;
  text-transform: uppercase;
  text-spacing: 0.1em;
  color: color(pink);
}

a, a:visited {
  transition: color 150ms ease;
  color: color(yellow);
  text-decoration: none;
  &:hover {
    color: color(green);
  }
  &:active {
    color: darken(color(green), 20%);
  }
}

.highlight {
  text-decoration: underline;
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.15em;
  text-decoration-color: color(yellow);
}

.color {
  position: absolute;
  z-index: z(background);
  width: 100vw;
  height: 50%;
  left: 0;
  margin: 0;
  &:first-child {
    background-color: color(pink);
    top: 0;
  }
  &:nth-child(2){
    background-color: color(red);
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

.fadeSlow-enter-active, .fade-slow-leave-active {
  $duration: 2000ms;
  $delay: 500ms;
  transition: opacity $duration ease $delay;
}
.fadeSlow-enter, .fade-slow-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  $duration: 500ms;
  transition: opacity $duration ease, height $duration ease;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  height: 0;
}
</style>
