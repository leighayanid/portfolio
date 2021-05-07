<template>
	<Layout>
		<vue-cobra :height="2" :zIndex="900" color="#FFCC00" :opacity="0.95" />
		<div class="post-title">
			<h2 class="post-title__text">
				{{ $page.post.title }}
			</h2>
			<div class="post-title__meta">
				<PostMeta :post="$page.post" />
			</div>
		</div>

		<div class="post">
			<div class="post__header">
				<g-image
					alt="Cover image"
					v-if="$page.post.cover_image"
					:src="$page.post.cover_image"
				/>
				<g-link
					v-if="$page.post.unsplash_author"
					:to="$page.post.unsplash_link"
				>
					Photo by {{ $page.post.unsplash_author }}
				</g-link>
			</div>

			<div class="post__content" v-html="$page.post.content" />

			<div class="post__footer">
				<PostTags :post="$page.post" />
			</div>

			<div class="post__related">
				<div class="post__related-previous" v-if="$page.previous">
					<p>Previous</p>
					<g-link :to="$page.previous.path">{{ $page.previous.title }}</g-link>
				</div>
				<div class="post__related-next" v-if="$page.next">
					<p>Next</p>
					<g-link :to="$page.next.path">{{ $page.next.title }}</g-link>
				</div>
			</div>
		</div>

		<hr />

		<Author class="post-author">
			<ko-fi-button></ko-fi-button>
		</Author>
	</Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";
import VueCobra from "~/components/VueCobra.vue";
import KoFiButton from "../components/KoFiButton.vue";

export default {
	components: {
		Author,
		PostMeta,
		PostTags,
		VueCobra,
		KoFiButton,
	},
	metaInfo() {
		return {
			title: this.$page.post.title,
			meta: [
				{ key: "og:type", property: "og:type", content: "article" },
				{
					key: "og:title",
					property: "og:title",
					content: this.$page.post.title,
				},
				{ property: "og:image", content: this.getCoverImage },
				{ property: "og:image:secure_url", content: this.getCoverImage },
				{
					name: "description",
					content: this.$page.post.description,
				},
				{
					key: "article:published_time",
					property: "article:published_time",
					content: this.$page.post.date,
				},
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: this.$page.post.title },
				{
					name: "twitter:description",
					content: this.$page.post.description,
				},

				{
					name: "twitter:site",
					content: "@leighrd_",
				},
				{
					name: "twitter:creator",
					content: "@leighrd_",
				},
				{ name: "twitter:image", content: this.getCoverImage },
			],
			script: [{ src: "https://platform.twitter.com/widgets.js", async: true }],
		};
	},
};
</script>

<page-query>
query Post ($id: ID!,  $previousElement: ID!, $nextElement: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
    unsplash_author
    unsplash_link
  }

	previous: post (id: $previousElement) {
    title
    path  
  }

	next: post (id: $nextElement) {
		title
    path
	}
}
</page-query>

<script>
export default {
	computed: {
		getCoverImage() {
			let coverImage = "";
			const cover = this.$page.post.cover_image;
			if (cover != null) {
				coverImage = `"https://leighdinaya.com", ${this.$page.post.cover_image.src}`;
			}
			return coverImage;
		},
	},
};
</script>

<style lang="scss">
.post {
	margin: 0 auto;
	width: 80%;

	@media screen and (max-width: 900px) {
		width: 100%;
	}

	&__header {
		width: calc(100% + var(--space) * 2);
		margin-left: calc(var(--space) * -1);
		margin-top: calc(var(--space) * 1);
		margin-bottom: calc(var(--space) * 2);
		overflow: hidden;
		position: relative;

		img {
			width: 100vw;
			margin: 2rem 0;
			border-radius: 5px;
		}

		a {
			font-size: 0.85rem;
			font-style: italic;

			position: absolute;
			top: 80%;
			left: 3%;

			&:hover {
				color: var(--title-color);
			}
		}

		&:empty {
			display: none;
		}
	}

	&__content {
		h1 {
			position: relative;
			margin-top: 2em;
			padding-bottom: 0.25rem;

			&:after {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 30%;
				height: 2px;
				border-bottom: 2px solid var(--link-color);
				border-radius: 5%;
				content: "";
			}
		}

		h2:first-child {
			margin-top: 0;
		}

		p {
			color: var(--body-color);
			word-spacing: 1px;

			img {
				margin-top: 1.5em;
			}
		}

		img {
			width: 100%;
			display: block;
			max-width: none;
			box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
			border-radius: 10px;
			margin: 2rem 0;
		}

		pre {
			margin-bottom: 1.5rem;
		}

		a {
			font-style: italic;

			&:hover {
				color: var(--title-color);
			}
		}
	}

	&-title {
		padding: calc(var(--space) / 6) 0 calc(var(--space) / 6);
		text-align: center;
	}

	&__related {
		width: 100%;
		display: flex;
		margin-right: 1rem;
		justify-content: space-between;
		margin-top: 3rem;

		@media screen and (max-width: 800px) {
			flex-wrap: wrap;
		}

		&-previous,
		&-next {
			width: 100%;
			margin-right: 1rem;
			display: flex;
			flex-direction: column;
			background-color: var(--bg-content-color);
			box-shadow: 1px 8px 20px 0 rgba(0, 0, 0, 0.1);
			padding: 15px;
			border-radius: 5px;

			a {
				color: var(--title-color);
			}
			p {
				color: var(--link-color);
			}
		}
	}
}

.post-author {
	margin-top: 3rem;
}

hr {
	margin: 5rem 0;
}

em {
	font-weight: bold;
}
</style>
