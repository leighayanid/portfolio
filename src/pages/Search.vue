<template>
  <Layout>
    <div class="search">
      <h1 class="welcome-text">
        Search..
      </h1>
      <p>
        Type any topic that you're looking for. Ex: Vue, Gridsome, Javascript
      </p>
      <GridsomeSearch />
    </div>
  </Layout>
</template>

<script>
import GridsomeSearch from "@/components/GridsomeSearch";
export default {
  components: {
    GridsomeSearch,
  },
};
</script>
