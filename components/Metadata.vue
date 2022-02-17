<template>
  <div class="p-8">
    <div class="grid grid-cols-3 gap-8">
     <h1 v-if="meta">{{meta.id}}</h1>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const METADATA_QUERY = gql`
query MyQuery {
  page(id: "2", idType: DATABASE_ID) {
    seo {
      metatitle: title,  
      metadesc: metaDesc,
    }
  }
}
`;

export default {
computed: {
    meta() {
      return this.$store.state.posts.post
    },
    meta() {
      return this.$store.state.pages.page
    },
  },
  apollo: {
    page: {
      query: METADATA_QUERY,
      variables () {
        return {
          myid: this.myvar
        }
      }
    },
  },
  data: () => ({
  page: {
    seo: {
        metatitle: '',
        metadesc: '',
    }
  }
}),
    head() {
      return {
        title: this.page.seo.metatitle,
        meta: [
          {
            content: this.page.seo.metadesc,
          }
        ]
      }
    }
}
</script>