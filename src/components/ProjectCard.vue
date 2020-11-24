<template>
  <div class="project-card content-box">
    <div class="project-card__content">
      <g-link :to="project.path">
        <g-image
          alt="Cover image"
          v-if="project.cover_image"
          class="project-card__image"
          :src="project.cover_image"
        />
      </g-link>

      <h5 class="project-card__title" v-html="project.title" />
      <p class="project-card__description" v-html="project.description" />

      <g-link :to="project.github_url">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-github"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path></svg
      ></g-link>
      <g-link :to="project.website_url">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-link"
        >
          <path
            d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          ></path>
          <path
            d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          ></path>
        </svg>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss">
.project-card {
  margin-bottom: var(--space);
  position: relative;
  box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: auto;
  width: auto;

  @media screen and (max-width: 800px) {
    margin-bottom: calc(var(--space) / 2);
  }

  &__image {
    width: 100vw;
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
    z-index: 0;
  }
}

.feather {
  margin-right: 0.5rem;
}
</style>
