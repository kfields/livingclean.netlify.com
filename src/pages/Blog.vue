<template>
  <Layout>
    <main>
      <section class="section">
        <h1>Blog</h1>
      </section>
      <Articles/>
    </main>
  </Layout>
</template>

<script>
import Articles from '~/components/Articles'
export default {
  components: {
    Articles
  }
}
</script>
