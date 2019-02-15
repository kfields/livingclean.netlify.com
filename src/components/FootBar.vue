<template>
  <footer class="footer">
    <p>
      Made with
      <v-icon name="heart"/>by
      <a href="https://kfields.netlify.com">Kurtis Fields</a>
    </p>
  </footer>
</template>
<script>
import "vue-awesome/icons/heart";

export default {
  name: "FootBar",
  props: [],
  components: {},
  data() {
    return {
      svg: ""
    };
  },
  mounted() {}
};
</script>
<style>
</style>