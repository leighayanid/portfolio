<template>
  <Layout>
    <vue-cobra :height="5" :zIndex="900" color="#FFCC00" :opacity="0.95" />
    <div class="post-title">
      <h2 class="post-title__text">
        {{ $page.post.title }}
      </h2>

      <PostMeta :post="$page.post" />
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
    </div>

    <div class="divider"></div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";
import VueCobra from "~/components/VueCobra.vue";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
    VueCobra,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post ($id: ID!) {
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
}
</page-query>

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
    }

    a {
      font-size: 0.85rem;
      font-style: italic;

      position: absolute;
      top: 90%;
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
}
</style>
