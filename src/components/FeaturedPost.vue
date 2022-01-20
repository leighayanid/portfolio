<template>
  <div>
    <h2 class="header-title">Recent Articles</h2>
    <div>
      <PostCard
        v-for="post in $static.allPost.edges"
        :key="post.id"
        :post="post.node"
      />
      <g-link to="/blog" class="view-all">View all articles</g-link>
    </div>
  </div>
</template>

<static-query>
query {
  allPost(filter: { published: { eq: true } }, limit: 3) {
    edges {
      node {
        id
        title
        date(format: "D. MMMM YYYY")
        timeToRead
        logo_image
        path
        tags {
          title
          path
        }
      }
    }
  }
}
</static-query>

<script>
import PostCard from '~/components/PostCard.vue'
export default {
  components: {
    PostCard,
  },
}
</script>
