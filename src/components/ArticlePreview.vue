<template>
  <div class="card preview">
    <g-link :to="`/blog/${article.slug}`" >
      <div class="card-image previewImage">
        <Fluid :alt="article.title" :src="article.heroImage.file.url.src"/>
      </div>
      <div class="card-content">
        <div class="previewDate">
          <small>{{article.publishDate}}</small>
        </div>
        <h3 class="previewTitle">
          {{article.title}}
        </h3>
        <p>
          {{article.description}}
        <p/>
      </div>
    </g-link>
  </div>
</template>
<script>
export default {
  name: 'ArticlePreview',
  props: ['article'],
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style  lang="scss">
.preview {
  padding-bottom: 1rem;
}
h3.previewTitle {
  margin-top: .5rem;
  margin-bottom: .5rem;
}
.previewImage {
  max-height: 200px;
  overflow: hidden;
  display: block;
  width: 100%;
}
.previewDate {
  text-align: right;
}

</style>