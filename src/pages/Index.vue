<template>
  <Layout>
    <HeroBanner :data="this.data" />
    <main>
      <section class="section">
        <p>
          Here at Living Clean we believe in a safe structured sober living environment.
          We encapsulate the proven time tested method of the 12 steps of Alcoholics Anonymous In all that we do.
          We create a social support structure for all residing in the house, and it provides a sense that the person is not alone, thus helping improve motivation to remain sober.
          </p>
          <p>
          The camaraderie experience here at Living Clean is unlike any other.
          Residents form a long lasting bond that quickly becomes a brotherhood.
          We believe in personal growth through unity, service to those who still suffer, and accountability to one another that reflects a new way of living for each and every resident that is on this journey together.
          At Living Clean we are staying sober one day at a time and having fun doing it!
        </p>
      </section>
      <RecentArticles />
    </main>
  </Layout>
</template>

<script>
import HeroBanner from '~/components/HeroBanner'
export default {
  components: {
    HeroBanner
  },
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    console.log('Index.vue')
    console.log(this)
  },
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        { name: 'description', content: 'Home' }
      ]
    }
  }
};
</script>
