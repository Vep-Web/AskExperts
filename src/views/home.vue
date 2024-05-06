<style scoped>
h2 {
  font-family: serif;
}
</style>

<template>
  <section class="hero">
    <hero-component></hero-component>
  </section>
  <section class="client">
    <client-component></client-component>
  </section>
  <section class="teams">
    <teams-component></teams-component>
  </section>
  <section class="control">
    <control-component></control-component>
  </section>
  <section class="proccess">
    <proccess-component></proccess-component>
  </section>
  <section class="analytical">
    <analytical-component></analytical-component>
  </section>
  <section class="feedback">
    <feedback-component></feedback-component>
  </section>
  <section class="results">
    <results-component></results-component>
  </section>
  <section class="blog">
    <blog-component></blog-component>
  </section>
  <section class="contact" id="contact">
    <contact-component></contact-component>
  </section>
</template>

<script>
import heroComponent from "../components/section/home/hero.vue";
import clientComponent from "../components/section/home/client.vue";
import teamsComponent from "../components/section/home/teams.vue";
import controlComponent from "../components/section/home/control.vue";
import proccessComponent from "../components/section/home/proccess.vue";
import analyticalComponent from "../components/section/home/analytical.vue";
import feedbackComponent from "../components/section/home/feedback.vue";
import resultsComponent from "../components/section/home/results.vue";
import blogComponent from "../components/section/home/blog.vue";
import contactComponent from "../components/section/home/contact.vue";

export default {
  data() {
    return {};
  },
  components: {
    heroComponent,
    clientComponent,
    teamsComponent,
    controlComponent,
    proccessComponent,
    analyticalComponent,
    feedbackComponent,
    resultsComponent,
    blogComponent,
    contactComponent,
  },
};
</script>
