<style scoped></style>

<template>
  <section class="capital background bac-protection">
    <main-section class="capital__container">
      <template v-slot:name> Password Protection </template>

      <template v-slot:title> Password Protection </template>
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
