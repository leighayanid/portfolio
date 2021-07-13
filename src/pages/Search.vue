<template>
	<Layout>
		<div class="search">
			<h1 class="welcome-text">Search..</h1>
			<p>
				Type any topic that you're looking for. Ex: Vue, Gridsome, Javascript
			</p>
			<GridsomeSearch />
			<all-post-tag></all-post-tag>
		</div>
	</Layout>
</template>

<script>
import GridsomeSearch from "@/components/GridsomeSearch";
import AllPostTag from "../components/AllPostTag.vue";
export default {
	components: {
		GridsomeSearch,
		AllPostTag,
	},
};
</script>

<style scoped>
h1 {
	margin: 0;
}
</style>
