<style scoped></style>

<template>
  <section class="capital background det-blog">
    <main-section class="capital__container">
      <template v-slot:name> September 1, 2022 </template>

      <template v-slot:title>
        Essential Guidelines To Grow Your Corporate Business With Us
      </template>
    </main-section>
  </section>
  <section class="article">
    <article-section></article-section>
  </section>
</template>

<script>
import mainSection from "../UI/main-section.vue";
import articleSection from "../components/section/blog/article.vue";

export default {
  components: {
    mainSection,
    articleSection,
  },
};
</script>
