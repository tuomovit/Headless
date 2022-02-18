<template>
    <div class="main">
      <section class="block">
        <h1 v-if="page">{{page.title}}</h1>
        <p v-if="page" v-html="page.content"></p>
      </section>

      <div class="block posts">
      <h1>Artikkelit</h1>
        <div class="row">
          <post-card v-for="post in posts" :key="post.slug" :post="post" />
          <div class="d-flex w-100">
            <div class="ml-auto" v-if="pageInfo.hasNextPage">
              <NuxtLink :to="{ query: { after: pageInfo.endCursor } }"
                ><span>Next Page</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PostsState } from '~/store/posts'
import { PagesState } from '~/store/pages'


const pageCount = 5

export default Vue.extend({
  computed: {
    page() {
      return this.$store.state.pages.page
    },
    posts() {
      return (this.$store.state.posts as PostsState).nodes
    },
    pageInfo() {
      return (this.$store.state.posts as PostsState).pageInfo
    },
    pages() {
      return (this.$store.state.pages as PagesState).nodes
    },
  },
  watch: {
    async $route() {
      await this.$nuxt.refresh()
      window.scrollTo(0, 0)
    },
  },
  async asyncData({ store, query }) {
    await store.dispatch('pages/getPage', 'etusivu'),
    await store.dispatch('posts/getPosts', {
      after: query.after,
      before: query.before,
      first: query.before ? undefined : pageCount,
      last: query.before ? pageCount : undefined,
    }),
    await store.dispatch('pages/getPages', {
      after: query.after,
      before: query.before,
      first: query.before ? undefined : pageCount,
      last: query.before ? pageCount : undefined,
    })
  },
  
})
</script>

<style>
.site-title {
  padding-top: 0.5em;
}

.block {
  margin-bottom: 4rem;
}
</style>
