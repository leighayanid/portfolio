<template>
  <div>
    <div class="contact">
      <div class="sns">
        <Author />
      </div>
      <div>
        <h1 class="welcome-text">Say hi!</h1>
        <p>Email: leighdinaya@protonmail.com</p>
        <p>Phone: +639266781390</p>
      </div>
    </div>

    <div class="sns"></div>
  </div>
</template>

<script>
import Author from '~/components/Author.vue'
export default {
  components: {
    Author,
  },
}
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 3rem;
  display: flex;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column-reverse;
  }
}
.sns {
  width: 50%;

  @media screen and (max-width: 800px) {
    margin-top: 1rem;
    width: 100%;
  }
}

p {
  margin: 0;
}
</style>
