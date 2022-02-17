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
body {
   font-family: 'Source Sans Pro', sans-serif;
}

h1 {
     font-weight: 700;
}
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

.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(187, 187, 187);
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 1em;
  }

.item {
  padding-right: 2em;
}
</style>