<template>
  <div>
    <g-link to="https://ko-fi.com/leighdinaya" class="kofi"
      ><img src="@/assets/images/BuyMeACoffee_blue@2x.png" alt="kofi logo"
    /></g-link>
  </div>
</template>

<style lang="scss" scoped>
.kofi {
  img {
    width: 25%;
    margin-top: 1rem;

    @media screen and (max-width: 800px) {
      width: 50%;
    }
  }
}
</style>
