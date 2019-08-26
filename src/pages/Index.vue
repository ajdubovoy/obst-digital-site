<template>
  <Layout :dark='false'>
    <Banner>
      <h1>Build what matters.</h1>
    </Banner>
  </Layout>
</template>

<script>
import Banner from '~/components/Banner';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Banner
  }
}
</script>
