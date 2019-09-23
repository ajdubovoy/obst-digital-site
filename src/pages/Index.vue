<template>
  <Layout :dark='false'>
    <Banner :badge="true" button='See Projects' target='content'>
      <h1>Build what matters.</h1>
    </Banner>
    <Badge />
    <Container id='content'>
      <div class="text-center" id="lead-text">
        <h4>
          We are a design & development studio that helps you build brands, websites, and digital products.
        </h4>
      </div>
    </Container>
    <Container id="intro-icons">
      <div class="row-icons">
        <IconBox :icon_url="'webevelopment'">
          <h1>Web Development</h1>
          <p>Some subtitle that tells <br>us somethign cool.</p>
        </IconBox>
        <IconBox :icon_url="'design'">
          <h1>This is the Title</h1>
          <p>Some subtitle that tells <br>us somethign cool.</p>
        </IconBox>
        <IconBox :icon_url="'design'">
          <h1>This is the Title</h1>
          <p>Some subtitle that tells <br>us somethign cool.</p>
        </IconBox>
      </div>
    </Container>  
  </Layout>
</template>

<script>
import Banner from '~/components/Banner';
import Container from '~/components/Container';
import IconBox from '~/components/IconBox';


export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Banner,
    Container,
    IconBox,
  }
}
</script>

<style lang="scss">
  #lead-text {
    max-width: 600px;
    margin: auto;
  }
  .icon-box {
    width: 33.3%;
    h1 {
      font-family: $header-font;
      font-size: 25px;
      color: $blue;
    }
  }
  #intro-icons {
    width: 90%;
  }
  .row-icons {
    display: flex;
    background: white;
    border-radius: 5px;
    padding: 64px 11px;
    text-align: center;
    box-shadow: 1px 1px 32px #172e3d3d;
    border: solid 3px #172e3d1f;
  }
</style>
