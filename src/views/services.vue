<style scoped></style>

<template>
  <section class="capital background bac-services">
    <main-section class="capital__container">
      <template v-slot:name> Services </template>

      <template v-slot:title>
        Creative Services For Boost Your Business Growth
      </template>
    </main-section>
  </section>
  <section class="control">
    <control-component></control-component>
  </section>
  <section class="contact" id="contact">
    <contact-component></contact-component>
  </section>
</template>

<script>
import contactComponent from "../components/section/home/contact.vue";
import controlComponent from "../components/section/home/control.vue";
import mainSection from "../UI/main-section.vue";
export default {
  components: {
    contactComponent,
    controlComponent,
    mainSection,
  },
};
</script>
