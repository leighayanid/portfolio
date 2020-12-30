<template>
  <div
    class="post-card content-box"
    :class="{ 'post-card--has-poster': post.poster }"
  >
    <g-image
      alt="Cover image"
      v-if="post.logo_image"
      class="post-card__image-logo"
      :src="post.logo_image"
    />
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="post.title" />
      <PostMeta class="post-card__meta" :post="post" />
      <PostTags class="post-card__tags" :post="post" />
      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: ["post"],
};
</script>

<style lang="scss">
.post-card {
  margin-bottom: calc(var(--space) * 2);
  position: relative;
  box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  height: auto;

  @media screen and (max-width: 800px) {
    margin-bottom: calc(var(--space) / 2);
  }

  &__image-logo {
    height: 50%;
    width: 4rem;
    padding: 0.2rem;
    margin-right: 5%;
  }

  &__image {
    width: 100%;
  }

  &__title {
    margin-top: 0.5em;
    color: var(--body-color);
    text-transform: inherit;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 20px 40px 0 rgba(0, 0, 0, 0.2);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
