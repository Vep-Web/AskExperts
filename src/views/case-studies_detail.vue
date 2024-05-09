<style scoped></style>

<template>
  <section class="capital background det-studies">
    <main-section class="capital__container">
      <template v-slot:name> Case Studies single </template>

      <template v-slot:title> Taxes & Efficiency </template>
    </main-section>
  </section>
</template>

<script>
import mainSection from "../UI/main-section.vue";
export default {
  components: {
    mainSection,
  },
};
</script>
