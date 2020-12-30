<template>
  <Layout>
    <div class="welcome">
      <g-image src="https://github.com/leighayanid.png" alt="welcome-pic" />
      <div>
        <h1 class="welcome-text">
          Mabuhay! I'm <strong>Leigh Dinaya</strong><br />
          <textra
            :data="words"
            :timer="2"
            :infinite="true"
            filter="top-bottom"
          />
          I <strong>build</strong> things for the <strong>web</strong>
        </h1>
        <p class="welcome-intro">
          Welcome to my website, a place where I share tips, tutorials, useful
          links, and where I document my journey through blogging as I discover
          new things while building software. I write mostly about front-end and
          back-end engineering.
        </p>
      </div>
    </div>
    <div class="content">
      <h3>Recent Blogs</h3>
      <div class="home">
        <div class="posts">
          <PostCard
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            :post="edge.node"
          />
          <Pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, perPage: 5, page: $page) @paginate {
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
        logo_image
        path
        tags {
          title
          path
        }
      }
    }
  }
}
</page-query>
<script>
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
        "Software Developer",
        "Front-End Developer",
        "Generalist Developer",
        "Lifelong Learner",
      ],
    };
  },
  components: {
    PostCard,
    Pager,
    Textra,
  },
};
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 75%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
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

strong {
  position: relative;
  background: none;

  &::after {
    content: "";
    background: rgba(#e59200, 0.3);
    position: absolute;
    left: 10px;
    bottom: -2px;
    width: calc(100% - 5px);
    height: calc(100% - 22.5px);
    z-index: -10;
    transition: 0.35s cubic-bezier(0.5, 0.1, 0, 2.05);

    @media screen and (max-width: 800px) {
      width: calc(100% - 10px);
      height: calc(100% - 15px);
    }
  }
}

.welcome {
  font-family: "Merriweather", serif;
  display: flex;
  margin: 2rem 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  img {
    border-radius: 50%;
    width: 20%;
    height: 20%;
    margin-right: 2rem;
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 800px) {
      width: 30%;
      height: 30%;
      margin: 1rem auto;
    }
  }

  &-text {
    width: 100%;
    line-height: 1.5;
    letter-spacing: 1px;

    @media screen and (max-width: 800px) {
     text-align: center;
    }
  }

  &-intro {
    margin-top: 2rem;
    width: 85%;

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
}
</style>
