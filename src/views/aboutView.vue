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
    <history-section>
      <template v-slot:descr>Our History</template>
      <template v-slot:title>
        <h2 class="history__title t-45">
          Better Website Means A User Experience
        </h2>
      </template>
      <template v-slot:text>
        Ippsum is the result of synergy between our teams and our customers. Our
        company culture is focused on excellent productivity, customer
        satisfaction, respect for team and individual achievements.</template
      >
      <template v-slot:video>
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
          href="#"
          class="history__link link-reset link-play"
          aria-label="Link to play vidio for YouTube"
        ></a
      ></template>
    </history-section>
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
