<template>
  <Layout>
    <div class="welcome">
      <h1 class="welcome-text">
        Mabuhay! I'm Leigh Dinaya.<br />
        <strong
          ><textra
            :data="words"
            :timer="2"
            :infinite="true"
            filter="bottom-top"/></strong
        ><br />
        I build things for the web.
      </h1>
      <p class="welcome-intro">
        Welcome to my website, a place where I share tips, tutorials, useful
        links, and where I document my journey through blogging as I discover
        new things while building software. I write mostly about front-end and
        back-end engineering stuff.
      </p>
    </div>
    <div>
      <h4>Recent Blogs</h4>
      <div class="home">
        <div class="posts">
          <PostCard
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            :post="edge.node"
          />
          <Pager :info="$page.posts.pageInfo" />
        </div>
        <div class="tags">
          <AllPostTags />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, perPage: 7, page: $page) @paginate {
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
        description
        cover_image (width: 770, height: 400, blur: 10)
        logo_image
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
<script>
import AllPostTags from "~/components/AllPostTag.vue";
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
        "Software Developer.",
        "Front-End Developer.",
        "Generalist Developer.",
        "Lifelong Learner.",
      ],
    };
  },
  components: {
    PostCard,
    Pager,
    AllPostTags,
    Textra,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
}

.tags {
  flex-basis: 30%;
  margin-left: 2rem;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 1rem;
  }
}

.posts {
  display: flex;
  flex-direction: column;
  flex-basis: 70%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
}

a {
  text-decoration: none;
  padding: 0 0.5rem;
}

nav {
  margin-top: 1rem;
  a {
    font-size: 1.25em;
  }
  .active--exact,
  .active {
    background: var(--title-color);
    color: var(--bg-color);
    border-radius: 5px;
  }
}

h2 {
  margin-top: 0;
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
