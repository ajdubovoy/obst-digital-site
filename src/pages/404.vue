<template>
  <Layout :dark='false'>
    <Banner>
      <h1>404 - Not Found</h1>
      <p>
        Sorry! We're working on it, but that fruit hasn't been planted yet...
      </p>
    </Banner>
    <Container>
      <Stack>
        <div class="text-center">
          <g-link to="/">Go Home</g-link>
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
    title: '404'
  },
  components: {
    Banner,
    Container,
    Stack
  }
}
</script>

<style lang="scss">
</style>
