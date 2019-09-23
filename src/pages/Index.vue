<template>
  <Layout :dark=false :topfruit=true>
    <Banner :badge="true" button='See Projects' target='main-content'>
    <h1> 
      <span class="title">Obst Digital</span>
      <span>Build what matters.</span>
    </h1>
    </Banner>
    <Container id='main-content'>
      <Stack id="content">
        <div class="text-center" id="lead-text">
          <h4>
            We are a design & development studio that helps you build brands, websites, and digital products.
          </h4>
        </div>
        <Panel>
          <Stack>
            <Switcher>
              <IconBox>
                <g-image src="~/assets/images/web_development_icon.svg" />
                <h4>Web Development</h4>
                <p>We use the latest technologies to build sustainable code.</p>
              </IconBox>
            </Switcher>
          </Stack>
        </Panel>
      </Stack>
    </Container>
  </Layout>
</template>

<script>
import Banner from '~/components/Banner';
import Container from '~/components/Container';
import IconBox from '~/components/IconBox';
import Stack from '~/components/Stack';
import Panel from '~/components/Panel';
import Switcher from '~/components/Switcher';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Banner,
    Container,
    IconBox,
    Stack,
    Panel,
    Switcher
  }
}
</script>

<style lang="scss">
#lead-text {
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
}
</style>
