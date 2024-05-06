<style scoped></style>

<template>
  <div class="results__container container">
    <div class="results__content">
      <header-block class="results__descr" color="green">Book Now</header-block>
      <h2 class="results__title t-45">
        Better Consult, <span class="results__span">Better</span> Results
      </h2>
      <p class="results__text t-16">
        Our software development agency has a growth up to 30% per each year. If
        you are result-oriented, not afraid to take initiative – drop us a note
        and join our team!
      </p>
      <link-phone color="yellow" class="results__link"></link-phone>
    </div>
    <picture>
      <img
        class="results__img"
        src="/src/img/results.png"
        alt="Decorativ image"
        width=""
        height=""
    /></picture>
  </div>
</template>

<script>
import linkPhone from "../../../UI/link-phone.vue";
import headerBlock from "../../../UI/header-block.vue";

export default {
  data() {
    return {};
  },

  components: {
    linkPhone,
    headerBlock,
  },
};
</script>
