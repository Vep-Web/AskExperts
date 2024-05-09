<style scoped lang="scss"></style>

<template>
  <div class="ideas__container container">
    <div class="ideas__content">
      <header-ui class="ideas__descr" color="green">OUR VISION</header-ui>
      <h2 class="ideas__title t-45">Turn your ideas into reality.</h2>
      <p class="ideas__text t-16">
        Capitalize on low hanging fruit to identify a ballpark value added
        activity beta test. Override the digital divide with additional from
        DevOps.
      </p>
      <ul class="ideas__list list-reset">
        <li class="ideas__item t-16">
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day.
        </li>
        <li class="ideas__item t-16">
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test override the digital.
        </li>
      </ul>
    </div>
    <picture>
      <source srcset="@/img/ideas.webp" type="image/webp" />
      <img
        class="ideas__img"
        src="@/img/ideas.jpg"
        alt="Decorativ image"
        width="560"
        height="390"
      />
    </picture>
  </div>
  <statistics-ui class="ideas__statistics"></statistics-ui>
</template>

<script>
import headerUi from "../../../UI/header-block.vue";
import statisticsUi from "../../../UI/statistics.vue";

export default {
  components: {
    headerUi,
    statisticsUi,
  },
};
</script>
