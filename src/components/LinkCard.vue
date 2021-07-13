<template>
	<div class="link-card">
		<g-link class="link-card__content" :to="resource.link">
			<h5 class="link-card__title" v-html="resource.title" />
			<p class="link-card__text" v-html="resource.link" />
		</g-link>
	</div>
</template>

<script>
export default {
	props: ["resource"],
};
</script>

<style lang="scss">
.link-card {
  margin-bottom: var(--space);
  position: relative;
  background-color: var(--bg-content-color);
  max-width: var(--content-width);
  transition: background-color 0.6s;
  width: 100%;
  padding: 0.35em;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02),
    1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.6s;

  @media screen and (max-width: 800px) {
    margin-bottom: calc(var(--space) / 3.5);
  }

  &__title {
    margin: 0;
  }

  p {
    margin: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
