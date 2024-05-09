<style scoped></style>

<template>
  <section class="capital background bac-team">
    <main-section class="capital__container">
      <template v-slot:name> Team </template>

      <template v-slot:title> The Consultors </template>
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
