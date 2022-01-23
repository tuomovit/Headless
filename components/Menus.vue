<template>
  <div class="primary-navigation">
    <article
      v-for="menuitem in menuItems.nodes"
      :key="menuitem.title"
      class="flex flex-col item"
    >
      <NuxtLink :to="`/${menuitem.title.toLowerCase()}`">{{ menuitem.title }}</NuxtLink>
    </article>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const MENU_QUERY = gql`
query MENU_ITEMS($location: MenuLocationEnum) {
  menuItems(where: {location: $location}) {
    nodes {
      key: id
      parentId
      title: label
      url
    }
  }
}
`;

export default {
  apollo: {
    menuItems: {
      query: MENU_QUERY,
      prefetch: true,
    },
  },
}
</script>

<style>
.primary-navigation {
  display: flex;
  align-items: center;
}

.item {
  padding-right: 2em;
}

</style>