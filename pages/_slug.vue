<template>
  <div class="container">
    <metadata></metadata>
    <h1 v-if="post">{{post.title}}</h1>
    <article v-if="post" class="py-5" v-html="post.content"></article>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'





export default Vue.extend({
  
  computed: {
    post() {
      return this.$store.state.posts.post
    },
    page() {
      return this.$store.state.pages.page
    },
  },
  async asyncData({ store, params, error }) {
    await store.dispatch('posts/getPost', params.slug),
    await store.dispatch('pages/getPage', params.slug)
    if (store.state.posts.post === null) {
      error({statusCode: 404, message: "Sivua ei löydy"})
    }
  },
})

</script>
