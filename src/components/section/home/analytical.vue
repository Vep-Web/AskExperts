<style scoped>
.analytical__container {
}
.b1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.b2 {
  position: absolute;

  z-index: 2;
}
</style>

<template>
  <!-- <div class="analytical__bac img-1">
    <div class="analytical__bac img-2">

    </div>
  </div> -->

  <img
    class="analytical__image img-1"
    src="@/img/Background1.jpg"
    alt="background image"
  />
  <img
    class="analytical__image img-2"
    src="@/img/Background.png"
    alt="background image"
  />
  <div class="analytical__container container">
    <div class="analytical__top">
      <div class="analytical__header">
        <span class="analytical__descr descr descr-yellow"
          >30 Years of Experience</span
        >
        <h2 class="analytical__title t-45"></h2>
      </div>
      <router-link class="link-reset"> </router-link>
    </div>
  </div>
</template>

<script></script>
