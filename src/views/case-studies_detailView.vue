<style scoped></style>

<template>
  <section class="capital background det-studies">
    <main-section class="capital__container">
      <template v-slot:name> Case Studies single </template>

      <template v-slot:title> Taxes & Efficiency </template>
    </main-section>
  </section>
  <section class="project"><project-section></project-section></section>

  <section class="distribution">
    <distribution-section></distribution-section>
  </section>
  <section class="photo"><photo-section></photo-section></section>
</template>

<script>
import mainSection from "../UI/main-section.vue";
import distributionSection from "../components/section/team-detail/distribution.vue";
import projectSection from "../components/section/case/project.vue";
import photoSection from "../components/section/case/photo.vue";

export default {
  components: {
    mainSection,
    distributionSection,
    projectSection,
    photoSection,
  },
};
</script>
