<template>
  <div class="section">
    <ul class="article-list">
      <li v-for="edge in $static.posts.edges" :key="edge.id">
        <ArticlePreview :article="edge.node" />
      </li>
    </ul>
  </div>
</template>
<static-query>
  query HomeQuery {
    posts: allContentfulBlogPost {
      edges {
        node {
          title
          description
          slug
          publishDate(format: "MMMM Do, YYYY")
          heroImage {
            path
            slug
            file {
              fileName
              url
            }
          }
        }
      }
    }
  }
</static-query>
<script>

export default {
  components: {
  },
};
</script>
