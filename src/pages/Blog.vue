<template>
	<Layout>
		<div class="posts">
			<h1 class="heading-title">All Articles</h1>
			<PostCard
				v-for="edge in $page.posts.edges"
				:key="edge.node.id"
				:post="edge.node"
			/>
			<Pager :info="$page.posts.pageInfo" />
		</div>
	</Layout>
</template>

<page-query>
query($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, perPage: 6, page: $page) @paginate {
     pageInfo {
      totalPages
      currentPage
    }
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
</page-query>
<script>
import PostCard from "~/components/PostCard.vue";
import { Pager } from "gridsome";

export default {
	metaInfo: {
		title: "Blog",
	},
	components: {
		PostCard,
		Pager,
	},
};
</script>

<style lang="scss" scoped>
.posts {
	width: 65%;
	margin: 0 auto;

	@media screen and (max-width: 900px) {
		width: 100%;
	}
}

a {
	text-decoration: none;
	padding: 0 0.5rem;
}

h2 {
	margin-bottom: 1rem;
}

hr {
	width: 25%;
	margin: 0;
}

strong {
	position: relative;
	background: none;

	&::after {
		content: "";
		background: rgba(#e59200, 0.3);
		position: absolute;
		left: 10px;
		bottom: -2px;
		width: calc(100% - 5px);
		height: calc(100% - 22.5px);
		z-index: -10;
		transition: 0.35s cubic-bezier(0.5, 0.1, 0, 2.05);

		@media screen and (max-width: 800px) {
			width: calc(100% - 10px);
			height: calc(100% - 15px);
		}
	}
}
</style>
