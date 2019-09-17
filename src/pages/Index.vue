<template>
  <Layout :dark='false'>
    <Banner button='See Projects' target='content'>
      <h1>Build what matters.</h1>
    </Banner>
    <Container id='content'>
      <Stack id="content">
        <div class="text-center" id="lead-text">
          <h4>
            We are a design & development studio that helps you build brands, websites, and digital products.
          </h4>
        </div>
      </Stack>
    </Container>
  </Layout>
</template>

<script>
import Banner from '~/components/Banner';
import Container from '~/components/Container';
import Stack from '~/components/Stack';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Banner,
    Container,
    Stack
  }
}
</script>
