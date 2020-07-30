<template>
  <Layout>
    <div class="project-title">
      <h2 class="project-title__text">
        {{ $page.project.title }}
      </h2>
      <div class="project-title__url">
        <g-link :to="$page.project.website_url"
          ><svg
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
            ></path></svg
        ></g-link>
        <g-link :to="$page.project.github_url">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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
      </div>
    </div>
    <div class="project content-box">
      <div class="project__header">
        <g-image
          alt="Cover image"
          v-if="$page.project.cover_image"
          :src="$page.project.cover_image"
        />
      </div>

      <div class="project__content" v-html="$page.project.content" />
    </div>

    <Author class="project-author" />
  </Layout>
</template>

<script>
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: "description",
          content: this.$page.project.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Project ($id: ID!) {
  project: project (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    content
    github_url
    website_url
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss" scoped>
.project-title {
  padding: calc(var(--space) / 6) 0 calc(var(--space) / 6);
  text-align: center;

  &__url {
    margin-bottom: 2rem;
  }
}

.project {
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * 1);
    margin-bottom: calc(var(--space) * 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h1 {
      margin-top: 2em;
    }

    h2:first-child {
      margin-top: 0;
    }

    p {
      font-size: 1em;
      color: var(--body-color);

      img {
        margin-top: 1.5em;
      }
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.project-author {
  margin-top: calc(var(--space) / 2);
}
</style>
