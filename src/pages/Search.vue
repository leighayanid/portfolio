<template>
  <Layout>
    <div class="search">
      <h1 class="welcome-text">
        Search..
      </h1>
      <all-post-tag></all-post-tag>
      <p>
        Type any topic that you're looking for. Ex: Vue, Gridsome, Javascript
      </p>
      <GridsomeSearch />
    </div>
  </Layout>
</template>

<script>
import GridsomeSearch from "@/components/GridsomeSearch";
import AllPostTags from "@/components/AllPostTag.vue";
import AllPostTag from "../components/AllPostTag.vue";
export default {
  components: {
    GridsomeSearch,
    AllPostTag,
  },
};
</script>
