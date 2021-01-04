<template>
	<div>
		<PostCard
			v-for="post in $static.allPost.edges"
			:key="post.id"
			:post="post.node"
		/>
		<g-link to="/posts">View all</g-link>
	</div>
</template>

<static-query>
query {
  allPost(filter: { published: { eq: true }}, limit: 3){
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
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
import PostCard from "~/components/PostCard.vue";
export default {
	components: {
		PostCard,
	},
};
</script>
