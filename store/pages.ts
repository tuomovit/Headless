import { ActionContext } from 'vuex'
import ApolloClient, { gql } from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export interface Page {
  id: string
  slug: string
  title: string
  content: string
  uri: string
  status: string
}

export interface PageInfo {
  endCursor: string
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
}

export interface PagesState {
  nodes: Page[]
  pageInfo: PageInfo
  page: Page
}

const pagesQuery = gql`
  fragment pageInfoData on WPPageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
  fragment listPageData on Page {
    id
    slug
    title
    content
    uri
    status
  }
  query GetPages(
    $where: RootQueryToPageConnectionWhereArgs
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    pages(
      where: $where
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        ...pageInfoData
      }
      nodes {
        ...listPageData
      }
    }
  }
`

const pageQuery = gql`
  fragment pageData on Page {
    id
    slug
    title
    content
    uri
    status
  }
  query GetContentNode($id: ID!) {
    contentNode(id: $id, idType: URI) {
      ... on Page {
        ...pageData
      }
    }
  }
`

const client = new ApolloClient({
  uri: `https://www.tuomovitikainen.fi/puhdas/graphql`,
  fetch,
})

export function state(): PagesState {
  return {
    nodes: [],
    pageInfo: {
      endCursor: '',
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: '',
    },
    page: {
      id: '',
      slug: '',
      title: '',
      content: '',
      uri: '',
      status: '',
    },
  }
}

export const mutations = {
  setPages(state: PagesState, pages: any[]) {
    state.nodes = pages
  },
  setPage(state: PagesState, page: any) {
    state.page = page
  },
  setPageInfo(state: PagesState, pageInfo: any) {
    state.pageInfo = pageInfo
  },
}

export const actions = {
  async getPages(
    { commit }: ActionContext<PagesState, PagesState>,
    variables: any
  ) {
    const result = await client.query({
      query: pagesQuery,
      variables,
    })

    const { nodes, pageInfo } = result.data?.pages

    commit('setPages', nodes)
    commit('setPageInfo', pageInfo)
  },
  async getPage(
    { commit }: ActionContext<PagesState, PagesState>,
    slug: string
  ) {
    const result = await client.query({
      query: pageQuery,
      variables: {
        id: slug,
      },
    })

    const page = result.data?.contentNode
    commit('setPage', page)
  },
}