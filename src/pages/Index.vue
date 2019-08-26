<template>
  <Layout :dark='false'>
    <Banner button='See Projects'>
      <h1>Build what matters.</h1>
    </Banner>
    <div id="main-content"></div>
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
