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
.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(187, 187, 187);
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 1em;
  }
</style>