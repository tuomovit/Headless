<template>
<div class="container">
  <div class="header">
  <h2>TV</h2>
  <menus></menus>
  </div>
  <Nuxt />
</div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://nuxt-tuomovit.vercel.app/' + this.$route.path
        }
      ]
    }
  }
}
</script>

