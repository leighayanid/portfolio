<template>
  <Layout>
    <div class="about">
      <h1 class="welcome-text">
        About Me
      </h1>
      <p>
        I'm Leigh Dinaya. I'm a programmer based in the Philippines. I build
        websites and applications and I've been coding since 2011.
      </p>
      <p>
        Specializing in the following tech: Vue.js, JAMstack, Laravel, Rails,
        Node.js.
      </p>
      <hr />
      <p style="margin-top: 1rem;">
        Education: <br />
        Bataan Peninsula State University<br />
        Bachelor of Science in Computer Science Major in Software Development<br />
        2011-2016
      </p>
      <p>
        Have a project you would like to discuss?<br />
        Hit me up at leighdinaya@protonmail.com<br />
        Let's build things together.
      </p>
      <hr />
      <div class="toolbar-sub">
        <h3>Frontend</h3>
      </div>
      <div class="skills animated fadeIn">
        <div class="skill">
          <HTML5Icon />
        </div>
        <div class="skill">
          <Css3Icon />
        </div>
        <div class="skill">
          <CssWizardryIcon />
        </div>
        <div class="skill">
          <BootstrapIcon />
        </div>
        <div class="skill">
          <VueJSIcon />
        </div>
        <div class="skill">
          <NuxtIcon />
        </div>
      </div>
      <div class="toolbar-sub">
        <h3>Backend / Database</h3>
      </div>
      <div class="skills animated fadeIn">
        <div class="skill">
          <LaravelIcon />
        </div>
        <div class="skill">
          <MongoDBIcon />
        </div>
        <div class="skill">
          <MySQLIcon />
        </div>
        <div class="skill">
          <RailsIcon />
        </div>
        <div class="skill">
          <FirebaseIcon />
        </div>
        <div class="skill">
          <HerokuIcon />
        </div>
        <div class="skill">
          <WordpressIcon />
        </div>
        <div class="skill">
          <GraphQLIcon />
        </div>
      </div>
      <div class="toolbar-sub">
        <h3>Version Control</h3>
      </div>
      <div class="skills animated fadeIn">
        <div class="skill">
          <GitIcon />
        </div>
        <div class="skill">
          <BitbucketIcon />
        </div>
        <div class="skill">
          <GithubIcon />
        </div>
      </div>
      <div class="toolbar-sub">
        <h3>Design Tools</h3>
      </div>
      <div class="skills animated fadeIn">
        <div class="skill">
          <FigmaIcon />
        </div>
        <div class="skill">
          <AdobeXDIcon />
        </div>
        <div class="skill">
          <AdobePhotoshopIcon />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BitbucketIcon from "~/assets/svg/bitbucket.svg";
import BootstrapIcon from "~/assets/svg/bootstrap.svg";
import Css3Icon from "~/assets/svg/css3.svg";
import CssWizardryIcon from "~/assets/svg/csswizardry.svg";
import FirebaseIcon from "~/assets/svg/firebase.svg";
import GitIcon from "~/assets/svg/git.svg";
import GithubIcon from "~/assets/svg/github.svg";
import HerokuIcon from "~/assets/svg/heroku.svg";
import HTML5Icon from "~/assets/svg/html5.svg";
import LaravelIcon from "~/assets/svg/laravel.svg";
import MongoDBIcon from "~/assets/svg/mongodb.svg";
import MySQLIcon from "~/assets/svg/mysql.svg";
import RailsIcon from "~/assets/svg/rails.svg";
import VueJSIcon from "~/assets/svg/vuejs.svg";
import EmailIcon from "~/assets/svg/envelop.svg";
import GraphQLIcon from "~/assets/svg/graphql.svg";
import NuxtIcon from "~/assets/svg/nuxt.svg";
import WordpressIcon from "~/assets/svg/wordpress.svg";
import FigmaIcon from "~/assets/svg/figma.svg";
import AdobeXDIcon from "~/assets/svg/adobe_xd.svg";
import AdobePhotoshopIcon from "~/assets/svg/adobe_photoshop.svg";
export default {
  metaInfo: {
    title: "About",
  },
  components: {
    LaravelIcon,
    BitbucketIcon,
    BootstrapIcon,
    Css3Icon,
    CssWizardryIcon,
    FirebaseIcon,
    GitIcon,
    GithubIcon,
    HerokuIcon,
    HTML5Icon,
    MongoDBIcon,
    MySQLIcon,
    RailsIcon,
    VueJSIcon,
    EmailIcon,
    GraphQLIcon,
    NuxtIcon,
    WordpressIcon,
    FigmaIcon,
    AdobePhotoshopIcon,
    AdobeXDIcon,
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 60%;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}

.skills {
  display: grid;
  grid-column: 1 / -1;
  grid-row: auto;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-gap: 1rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 500px) {
    margin: 0;
  }

  &-major {
    @media only screen and (max-width: 800px) {
      grid-template-columns: 100%;
    }
  }
}

.skill {
  display: grid;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(var(--body-color), 0.25);
  border-radius: 10px;
  background: white;
  height: auto;

  @media only screen and (max-width: 600px) {
    svg {
      width: 32;
      height: 32;
    }
  }

  &-major {
    height: auto;
    color: var(--bg-color);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 1rem;
    letter-spacing: 1px;

    h3 {
      margin: 0;
      color: var(--bg-color);

      span {
        margin-left: 0.5rem;
      }
    }

    p {
      margin-top: 0.5rem;
      font-size: 1rem;
      letter-spacing: 0.75px;
      color: var(--bg-color);
    }

    a {
      border: 2px solid var(--bg-content-color);
      border-radius: 5px;
      background: none;
      color: var(--bg-content-color);
      padding: 0.75rem;
      transition: all 0.3s ease;
      font-size: 0.75rem;

      &:hover {
        background: var(--title-color);
        color: white;
        cursor: pointer;
      }
    }
  }
}

h3 {
  margin: 1rem 0;
}

blockquote {
  margin-bottom: 5rem;
  font-style: italic;
  padding: 1rem;
}

.me {
  color: var(--title-color);
}

hr {
  margin: 3rem 0;
}
</style>
