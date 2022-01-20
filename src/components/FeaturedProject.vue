<template>
  <div>
    <h2 class="header-title">Featured Projects</h2>
    <div class="projects">
      <ProjectCard
        v-for="project in $static.allProject.edges"
        :key="project.node.id"
        :project="project.node"
      />
    </div>
    <g-link to="/portfolio" class="view-all">View all projects</g-link>
  </div>
</template>

<static-query>
query {
  allProject(filter: { published: { eq: true } }, limit: 2) {
    edges {
      node {
        id
        title
        cover_image(width: 770, height: 380, blur: 10)
        github_url
        website_url
        path
      }
    }
  }
}
</static-query>

<script>
import ProjectCard from '~/components/ProjectCard.vue'
export default {
  components: {
    ProjectCard,
  },
}
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1.25rem;
}
</style>
