<template>
<div class="container">
  <div class="header">
    <NuxtLink to="/">
      <h2>TV</h2>
    </NuxtLink>
    <menus></menus>
  </div>
  <Nuxt />
  <Footer></Footer>
</div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://nuxt-tuomovit.vercel.app' + this.$route.path
        }
      ]
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}

.primary-navigation {
  display: flex;
  align-items: center;
}

.item {
  padding-right: 2em;
}

</style>