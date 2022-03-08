<template>
  <div class="nav-header">
    <div class="nav-header__content">
      <g-link to="/">LD 🇺🇦</g-link>
    </div>
    <div class="nav-header__links">
      <g-link to="/blog">Blog</g-link>
      <g-link to="/portfolio">Work</g-link>
      <g-link to="/about">About</g-link>
      <g-link to="/resources">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bookmark"
        >
          <path
            d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
          ></path></svg
      ></g-link>
      <g-link to="/search" aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </g-link>
    </div>
    <ToggleTheme />
  </div>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue'
export default {
  components: {
    ToggleTheme,
  },
  props: {
    showDetails: false,
    type: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.nav-header {
  height: 10%;
  width: 100%;
  padding: 2.5% 15%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 1.5% 4%;
    height: auto;
  }

  &__content {
    flex-basis: 60%;

    a {
      margin: 0;
      font-size: 1.5rem;
      color: var(--title-color);
    }

    @media screen and (max-width: 800px) {
      flex-basis: 0;
      margin: 1rem 0;
    }
  }

  .active--exact {
    color: var(--title-color);
  }

  &__links {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 5px;

    svg {
      display: grid;
      place-items: center;
      align-self: stretch;
    }

    @media screen and (max-width: 800px) {
      justify-content: space-around;
      padding: 0;
      margin-bottom: 1rem;
    }
  }
}

p {
  color: var(--link-color);
  width: 100%;
}

a {
  text-decoration: none;
  margin-right: 1.5rem;
  padding: 0;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--body-color);
  font-family: 'Fira Sans', sans-serif;

  @media screen and (max-width: 800px) {
    margin-right: 0.7rem;
  }
}
</style>
