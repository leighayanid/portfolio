<template>
  <div class="content-box">
    <h4>Tags</h4>
    <div class="post-tags">
      <g-link
        class="post-tags__link"
        v-for="tag in $static.allTag.edges"
        :key="tag.id"
        :to="tag.node.path"
      >
        <span>#</span>{{ tag.node.title }}
      </g-link>
    </div>
  </div>
</template>

<static-query>
  query {
    allTag {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</static-query>

<style lang="scss" scoped>
h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;

  &__link {
    margin-bottom: 0.5rem;
    font-size: 0.7em;
    text-decoration: none;
    color: var(--bg-content-color); //Todo: remove important;
    padding: 0.35em;
    border-radius: 10px;
    border: 1px solid #e59200;
    background: none;
  }
}

.content-box {
  margin-top: 1rem;
}
</style>
