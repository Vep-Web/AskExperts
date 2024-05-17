<style scoped></style>

<template>
  <section class="capital background bac-log">
    <main-section class="capital__container">
      <template v-slot:name> Updates </template>

      <template v-slot:title> Changelog </template>
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
