<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span style="font-family:'Lobster';font-size: 1.5em; margin-right:1em">Living Clean</span>
          <v-icon name="coffee"/>
        </a>
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="burgerClick"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" ref="navMenu">
        <div class="navbar-start">
          <g-link class="navbar-item" to="/blog">Blog</g-link>
          <g-link class="navbar-item" to="/contact">Contact</g-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <a href="https://twitter.com">
              <v-icon name="brands/twitter" scale="2"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<!--
<static-query>
query Home {
  metaData {
    siteName
  }
}
</static-query>
-->
<script>
import "vue-awesome/icons/brands/twitter";
import "vue-awesome/icons/coffee";

export default {
  name: "NavBar",
  props: [],
  components: {},
  data() {
    return {};
  },
  mounted: function() {
  },
  methods: {
    burgerClick (event) {
      const el = event.currentTarget
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      //const $target = document.getElementById(target);
      const $target = this.$refs['navMenu']

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    }
  }
};
</script>