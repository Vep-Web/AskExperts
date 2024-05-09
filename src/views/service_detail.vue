<style scoped></style>

<template>
  <section class="capital background det-services">
    <main-section class="capital__container">
      <template v-slot:name> Service SINGLE </template>

      <template v-slot:title> Services Details </template>
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
