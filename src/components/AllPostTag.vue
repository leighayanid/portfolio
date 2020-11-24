<template>
	<div class="content-box">
		<h4>Tags</h4>
		<div class="post-tags">
			<g-link
				class="post-tags__link"
				v-for="tag in $static.allTag.edges"
				:key="tag.id"
				:to="tag.node.path"
			>
				{{ tag.node.title }}
			</g-link>
		</div>
	</div>
</template>

<static-query>
  query {
    allTag {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</static-query>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
	.content-box {
		margin-top: 1rem;
	}
}

h4 {
	margin-top: 0;
	margin-bottom: 1rem;
}

.post-tags {
	display: flex;
	flex-wrap: wrap;

	a {
		margin-bottom: 1em;
		font-size: 0.7em;
		text-decoration: none;
		padding: 0.2em 0.75em;
		border-radius: 15px;
		background: var(--title-color);
		color: var(--bg-color) !important;

		&:hover {
			background: var(--bg-color);
			color: var(--body-color) !important;
		}
	}
}
</style>
