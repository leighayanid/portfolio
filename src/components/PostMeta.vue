<template>
  <div class="post-meta">
    <p>
      {{ post.date }} -
      <template v-if="post.timeToRead"
        >{{ post.timeToRead }} minute read
      </template>
    </p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
  margin: 0;
}
</style>
