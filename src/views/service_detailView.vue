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
  <section class="history history--black">
    <history-section>
      <template v-slot:descr>Our History</template>
      <template v-slot:title>
        <h2 class="history__title t-45 history__title--color">
          Strategy for Every Stage in the Client's Journey
        </h2>
      </template>
      <template v-slot:text> </template>
      <template v-slot:video>
        <img
          class="history__image"
          src="@/img/history2.png"
          alt="Preview video" />

        <a
          href="#"
          class="history__link link-reset link-play"
          aria-label="Link to play vidio for YouTube"
        ></a
      ></template>
    </history-section>
  </section>
  <section class="contact contact--m">
    <contact-section></contact-section>
  </section>
  <section class="questions">
    <questions-sectionfrom></questions-sectionfrom>
  </section>
</template>

<script>
import mainSection from "../UI/main-section.vue";
import projectionsSection from "../components/section/servises_detail/projections.vue";
import workSection from "../components/section/servises_detail/work.vue";
import historySection from "../components/section/about/history.vue";
import contactSection from "../components/section/servises_detail/contact.vue";
import questionsSectionfrom from "../components/section/servises_detail/questions.vue";

export default {
  components: {
    mainSection,
    projectionsSection,
    workSection,
    historySection,
    contactSection,
    questionsSectionfrom,
  },
};
</script>
