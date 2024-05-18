<style scoped></style>

<template>
  <section class="capital background bac-contact">
    <main-section class="capital__container">
      <template v-slot:name> Contactus </template>

      <template v-slot:title> Feel Free To Reach Us </template>
    </main-section>
  </section>
  <section class="connection">
    <connection-section></connection-section>
  </section>
  <section class="distribution">
    <distribution-section></distribution-section>
  </section>
  <section class="contact" id="contact">
    <contact-component></contact-component>
  </section>
</template>

<script>
import contactComponent from "../components/section/home/contact.vue";
import mainSection from "../UI/main-section.vue";
import distributionSection from "../components/section/team-detail/distribution.vue";
import connectionSection from "../components/section/contact/connection.vue";

export default {
  components: {
    contactComponent,
    mainSection,
    distributionSection,
    connectionSection,
  },
};
</script>
