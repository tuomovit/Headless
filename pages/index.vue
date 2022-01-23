<template>
    <div>
      <h1 class="site-title text-center">Headless WordPress</h1>
     
      <div class="py-4 posts">
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

.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(187, 187, 187);
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 1em;
}
</style>
