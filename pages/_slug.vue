<template>
  <div class="container">
    <metadata></metadata>
    <h1 v-if="post">{{post.title}}</h1>
    <h1 v-else class="text-center">Page not found</h1>

    <article v-if="post" class="py-5" v-html="post.content"></article>
    <article v-else class="py-5">Ei löydy</article>
    <!-- eslint-disable-next-line vue/no-v-html -->
    
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
  async asyncData({ store, params }) {
    await store.dispatch('posts/getPost', params.slug),
    await store.dispatch('pages/getPage', params.slug)
  },
  
})
</script>
