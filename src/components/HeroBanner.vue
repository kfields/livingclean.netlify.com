<template>
  <div class="hero">
    <Fluid class="heroImage" alt="Living Clean" src="bkgrnd.jpeg" :width="1920"/>
    <div class="heroDetails wrapper">
      <h1 class="heroHeadline">Living Clean</h1>
      <p class="heroTitle">Fraternity &middot; Serenity &middot; Sobriety</p>
      <p>Sober Living</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HeroBanner',
  components: {
  },
  props: ['data']
}
</script>
<style>

</style>