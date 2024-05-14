<style scoped></style>

<template>
  <div class="history__container container">
    <div class="history__content">
      <header-block class="history__descr" color="green"
        >Our History</header-block
      >
      <h2 class="history__title t-45">
        Better Website Means A User Experience
      </h2>
      <p class="history__text t-16">
        Ippsum is the result of synergy between our teams and our customers. Our
        company culture is focused on excellent productivity, customer
        satisfaction, respect for team and individual achievements.
      </p>
      <div class="history__video-block">
        <picture>
          <source srcset="@/img/history.webp" type="image/webp" />
          <img
            class="history__image"
            src="@/img/history.jpg"
            alt="Preview video"
            width=""
            height=""
          />
        </picture>
        <a
          href="{{ link }}"
          class="history__link link-reset link-play"
          aria-label="Link to play vidio for YouTube"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import headerBlock from "../../../UI/header-block.vue";

export default {
  data() {
    link: "/";
  },
  components: {
    headerBlock,
  },
};
</script>
