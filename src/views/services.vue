<style scoped>
.capital {
  margin: 0;
}
</style>

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
    <control-section></control-section>
  </section>
  <section class="process"><process-section></process-section></section>
  <section class="pricing"><pricing-section></pricing-section></section>
  <section class="contact" id="contact">
    <contact-section></contact-section>
  </section>
</template>

<script>
import contactSection from "../components/section/home/contact.vue";
import controlSection from "../components/section/home/control.vue";
import pricingSection from "../components/section/services/pricing.vue";
import processSection from "../components/section/services/process.vue";
import mainSection from "../UI/main-section.vue";

export default {
  components: {
    contactSection,
    controlSection,
    pricingSection,
    processSection,
    mainSection,
  },
};
</script>
