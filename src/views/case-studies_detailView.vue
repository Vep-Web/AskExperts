<style scoped></style>

<template>
  <section class="capital background det-studies">
    <main-section class="capital__container">
      <template v-slot:name> Case Studies single </template>

      <template v-slot:title> Taxes & Efficiency </template>
    </main-section>
  </section>
  <section class="project"></section>
  <section class="photo"></section>

  <section class="distribution">
    <distribution-section></distribution-section>
  </section>
</template>

<script>
import mainSection from "../UI/main-section.vue";
import distributionSection from "../components/section/team-detail/distribution.vue";
export default {
  components: {
    mainSection,
    distributionSection,
  },
};
</script>
