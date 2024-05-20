<style scoped></style>

<template>
  <div class="analytical__bac">
    <img
      class="analytical__image"
      src="@/img/Background.png"
      alt="background image"
    />
  </div>
  <div class="analytical__content">
    <div class="analytical__header">
      <div class="analytical__block">
        <header-block class="analytical__descr" color="green"
          >Proccess</header-block
        >
        <h2 class="analytical__title t-45">
          Our client, global analytical techno company, wanted to build market.
        </h2>
      </div>
      <router-link
        to="/case-studies"
        class="analytical__link link-reset link link-yellow"
        >More Gallery</router-link
      >
    </div>
    <photoContent-ui class="analytical__list"></photoContent-ui>
    <statistics-ui class="analytical__list"></statistics-ui>
  </div>
</template>

<script>
import headerBlock from "../../../UI/header-block.vue";
import photoContentUi from "../../../UI/photo-content.vue";
import statisticsUi from "../../../UI/statistics.vue";

export default {
  components: {
    headerBlock,
    statisticsUi,
    photoContentUi,
  },
};
</script>
