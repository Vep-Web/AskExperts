<style scoped></style>

<template>
  <section class="capital background det-services">
    <main-section class="capital__container">
      <template v-slot:name> Service SINGLE </template>

      <template v-slot:title> Services Details </template>
    </main-section>
  </section>
  <section class="projections">
    <projections-section></projections-section>
  </section>
  <section class="work">
    <work-section></work-section>
  </section>
  <section class="history"><history-section></history-section></section>
  <!-- <section class="proccess"></section> -->
  <section class="questions">
    <questions-sectionfrom></questions-sectionfrom>
  </section>
</template>

<script>
import mainSection from "../UI/main-section.vue";
import projectionsSection from "../components/section/servises_detail/projections.vue";
import workSection from "../components/section/servises_detail/work.vue";
import historySection from "../components/section/about/history.vue";
// import proccessSection from '../components/section/servises-detail/projections.vue';
import questionsSectionfrom from "../components/section/servises_detail/questions.vue";

export default {
  components: {
    mainSection,
    projectionsSection,
    workSection,
    historySection,
    questionsSectionfrom,
  },
};
</script>
