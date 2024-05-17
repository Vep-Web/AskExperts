<style scoped></style>

<template>
  <section class="capital background bac-team">
    <main-section class="capital__container">
      <template v-slot:name> Team </template>
      <template v-slot:title> The Consultors </template>
    </main-section>
  </section>
  <section class="people"><people-section></people-section></section>
  <section class="newsletter">
    <newsletter-section></newsletter-section>
  </section>
</template>

<script>
import newsletterSection from "../components/section/team/newsletter.vue";
import peopleSection from "../components/section/team/people.vue";
import mainSection from "../UI/main-section.vue";

export default {
  components: {
    mainSection,
    newsletterSection,
    peopleSection,
  },
};
</script>
