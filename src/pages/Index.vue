<template>
	<Layout>
		<welcome-intro></welcome-intro>
		<div class="content">
			<div class="posts">
				<featured-post></featured-post>
			</div>
			<div class="projects">
				<featured-project></featured-project>
			</div>
		</div>
		<contact-info />
	</Layout>
</template>

<script>
import FeaturedPost from "~/components/FeaturedPost.vue";
import FeaturedProject from "../components/FeaturedProject.vue";
import WelcomeIntro from "../components/WelcomeIntro.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
	metaInfo: {
		title: "Home",
	},	

	components: {
		FeaturedPost,
		FeaturedProject,
		WelcomeIntro,
		ContactInfo,
	},
};
</script>

<style lang="scss" scoped>
.posts {
	display: flex;
	flex-direction: column;
	width: 75%;
	margin: 2rem 0;

	@media screen and (max-width: 900px) {
		width: 100%;
	}
}

.projects {
	margin: 5rem 0;
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
</style>
