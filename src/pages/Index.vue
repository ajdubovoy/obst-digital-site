<template lang="pug">
  layout
    l-cover#banner
      transition(name="slide" appear)
        .color.top
      transition(name="slide" appear)
        .color.btm
      transition(name="fade" appear)
        h1
          #logo
            g-image(src="~/assets/images/logo3.svg")
          .text-content
            span(class="highlight")
              | Making <br>
            | is at our Core
            p
              a(
              href="mailto:contact@obst.digital"
              target="_blank"
              )
                | Contact us
              span
                |  to learn more.
    transition(name="" appear)
      l-sidebar
        div.sidebar
          div.half#left
            a(href="https://www.betahaus.com/magazine/people-in-beta-obst-digital"
            target="_blank")
              div.overlay
              h1
                p.highlight IN THE PRESS:
                | People In Beta
                p People in beta #6: Obst Digital <br> Not-Your-Typical Full-Stack Developers
          div.half#right
            a(href="/projects"
            target="_blank")
              div.overlay
              h1
                p.highlight CASE STUDY:
                | Artyque Platform
                p Building a digital agency and platform for Emerging artists.
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
.apple {
  position: absolute;
  right: -3px;
  top: 205px;
  right: 0px;
}
.left {
  background-color: color(blue);
}
#banner {
  // position: absolute;
   p {
    font-size: 1.8rem;
    text-align: left;
    color: color(white);
    font-weight: 100;

  }
}

.overlay {
  z-index: 0;
  transition: ease opacity 1s;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: color(blue);
  opacity: 0.1;
}

.half {
  position: relative;
  height: 470px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  h1 {
    z-index: 10;
    transition: ease all 1s;
    font-size: 50px;
    text-align: center;
    opacity: 0;
  }
  p {
    font-size: 15px;
    text-align: center;
    color: color(white);
  }
  .highlight {
    max-width: 150px;
    background-color: transparent;
    border: solid 1px color(yellow);
    margin: auto;
    padding: 6px;
  }

  &:hover {
    h1 {
      opacity: 1;
    }
    .overlay {
      opacity: .6;
    }
  }
}

#left {
  transition: ease all 1s;
  background: url("../assets/images/cover.jpg"),;
  background-position: center;
  background-size: cover;
  min-width: 50%;
  background-color: blue;
  &:hover {
    background-position: center;
    background-size: cover;
  }
}

#right {
  background: url("../assets/images/artyque.png");
  background-position: center;
  background-size: cover;
}

h1 {
  font-weight: 400;
  text-transform: capitalize;
  color: color(white);
  margin: 0 30px;
  font-size: calc(2rem + 6vw);
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
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.15em;
  text-decoration-color: color(yellow);
  background: #F5CB5C;
  border-radius: 4px;
  color: #efac00;
  padding: 0em .3em;
}



#logo {
    display: flex;
    margin-bottom: 124px;
    img {
      max-width: 220px;
    }
}

.color {
  position: absolute;
  z-index: z(background);
  width: 100vw;
  left: 0;
  margin: 0;
  &.top {
    height: 30%;
  }
  &.btm {
    height: 80%;
  }

  //"../assets/images/bg.jpg"
  &:first-child {
    background: #f5f5f5;
    top: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &:nth-child(2){
    background: linear-gradient(#182e3d, #22455d);
    top: 30%;
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
