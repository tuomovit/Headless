import { ActionContext } from 'vuex'
import ApolloClient, { gql } from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import Vue from 'vue'
import Vuex from 'vuex'



const menuQuery = gql`
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
`

const client = new ApolloClient({
  uri: `https://www.tuomovitikainen.fi/puhdas/graphql`,
  fetch,
})

async function Menus() {
  const result2 = await client.query({
    query: menuQuery
  })

  const valikot = result2.data?.menuItems
  return valikot;
}

Menus();
