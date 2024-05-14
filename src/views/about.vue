<style scoped></style>

<template>
  <section class="capital background bac-about">
    <main-section class="capital__container">
      <template v-slot:name> About </template>

      <template v-slot:title>
        Creative Services For Boost Your Business Growth
      </template>
    </main-section>
  </section>
  <section class="ideas">
    <ideas-section></ideas-section>
  </section>
  <section class="clients">
    <clients-section></clients-section>
  </section>

  <section class="history">
    <history-section></history-section>
  </section>

  <section class="team">
    <team-section></team-section>
  </section>
  <section class="results">
    <results-component></results-component>
  </section>
</template>

<script>
import resultsComponent from "../components/section/home/results.vue";
import mainSection from "../UI/main-section.vue";
import ideasSection from "../components/section/about/ideas.vue";
import clientsSection from "../components/section/about/clients.vue";
import historySection from "../components/section/about/history.vue";
import teamSection from "../components/section/about/team.vue";

export default {
  components: {
    resultsComponent,
    mainSection,
    ideasSection,
    clientsSection,
    historySection,
    teamSection,
  },
};
</script>
