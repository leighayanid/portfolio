<template>
	<Layout>
		<div class="welcome">
			<h1 class="welcome-text">
				Mabuhay! I'm Leigh Dinaya<br />
				<strong
					><textra
						:data="words"
						:timer="2"
						:infinite="true"
						filter="top-bottom"/></strong
				><br />
				I build things for the web
			</h1>
			<p class="welcome-intro">
				Welcome to my website, a place where I share tips, tutorials, useful
				links, and where I document my journey through blogging as I discover
				new things while building software. I write mostly about front-end and
				back-end engineering stuff.
			</p>
		</div>
		<div class="content">
			<h2>Recent Blogs</h2>
			<div class="home">
				<div class="posts">
					<PostCard
						v-for="edge in $page.posts.edges"
						:key="edge.node.id"
						:post="edge.node"
					/>
					<Pager :info="$page.posts.pageInfo" />
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, perPage: 5, page: $page) @paginate {
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
import Textra from "~/components/Textra.vue";

export default {
	metaInfo: {
		title: "Home",
	},
	data() {
		return {
			words: [
				"Software Developer",
				"Front-End Developer",
				"Generalist Developer",
				"Lifelong Learner",
			],
		};
	},
	components: {
		PostCard,
		Pager,
		Textra,
	},
};
</script>

<style lang="scss" scoped>
.posts {
	display: flex;
	flex-direction: column;
	width: 75%;

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
	float: left;
	margin-right: 5px;
}
</style>
