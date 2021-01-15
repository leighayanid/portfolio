<template>
	<Layout>
		<h1 class="welcome-text">
			My recent work
		</h1>
		<p class="welcome-intro">
			A place where I put my work. Here you can find some of selected projects
			I've been working on for a while.
		</p>
		<div>
			<div class="projects">
				<ProjectCard
					v-for="edge in $page.projects.edges"
					:key="edge.node.id"
					:project="edge.node"
				/>
				<Pager :info="$page.projects.pageInfo" />
			</div>
		</div>
	</Layout>
</template>

<page-query>
query($page: Int) {
  projects: allProject(filter: { published: { eq: true }}, perPage: 6, page: $page) @paginate {
     pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        cover_image (width: 770, height: 380, blur: 10)
        github_url
        website_url
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
import { Pager } from "gridsome";

export default {
	components: {
		ProjectCard,
		Pager,
	},
	metaInfo: {
		title: "Portfolio",
	},
};
</script>

<style lang="scss" scoped>
.projects {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 1.25rem;
}

a {
	text-decoration: none;
}
</style>
