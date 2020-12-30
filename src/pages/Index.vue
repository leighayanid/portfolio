<template>
  <Layout>
    <div class="welcome">
      <img src="https://github.com/leighayanid.png" alt="welcome-pic" />
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

    img {
      width: 40%;
      margin: 0 auto;
    }
  }

  img {
    border-radius: 50%;
    height: 10rem;
    margin-right: 2rem;
  }

  &-text {
    width: 100%;
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
