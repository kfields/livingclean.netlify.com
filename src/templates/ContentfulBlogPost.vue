<template>
  <Layout>
    <article>
          <Fluid alt :src="$page.post.heroImage.file.url.src"/>
      <div class="section">
        <div>
          <h1>{{$page.post.title}}</h1>
          <small style="display: block; text-align:right">{{$page.post.publishDate}}</small>
        </div>
        <div v-html="markdown"/>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query BlogPostByPath($path: String!) {
  post: contentfulBlogPost(path: $path ) {
    title
    publishDate(format: "MMMM Do, YYYY")
    description
    body
    heroImage {
      file {
        url
      }
    }
  }
}
</page-query>

<script>
import marked from "marked";
export default {
  name: "Contentful",
  // props: [''],
  // components: {},
  data() {
    return {
      markdown: ""
    };
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [{ name: "description", content: this.$page.post.description }]
    };
  },
  mounted: function() {
    console.log("BlogPost.vue");
    console.log(this);

    this.markdown = marked(this.$page.post.body);
  }
};
</script>
<style>
article ul {
  list-style: disc inside;
  margin-bottom: 1rem;
}
article ul li {
  margin-bottom: 1rem;
}

</style>