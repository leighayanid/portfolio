<template>
  <Layout>
    <div class="links">
      <h1 class="welcome-text">Useful resources, bookmarks, tutorials</h1>
      <p class="welcome-intro">
        A place where I put things to read. Here you can find useful links.
        Topics are mostly about front-end and back-end development.
      </p>
      <GridsomeSearch />
      <LinkCard
        v-for="edge in $page.resources.edges"
        :key="edge.node.id"
        :resource="edge.node"
      />
      <Pager :info="$page.resources.pageInfo" />
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  resources: allResource(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        link
      }
    }
  }
}
</page-query>

<script>
import LinkCard from '~/components/LinkCard.vue'
import { Pager } from 'gridsome'
import GridsomeSearch from '~/components/GridsomeSearch'

export default {
  components: {
    LinkCard,
    Pager,
    GridsomeSearch,
  },
  metaInfo: {
    title: 'Resources',
  },
  // mixins: [Search]
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
  h2 {
    align-self: flex-start;
  }
}

a {
  text-decoration: none;
  padding: 0 0.5rem;
}
</style>
