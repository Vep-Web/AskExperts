<style scoped></style>

<template>
  <section class="capital background bac-licenses">
    <main-section class="capital__container">
      <template v-slot:name> Licenses </template>

      <template v-slot:title> All asset's Licenses </template>
    </main-section>
  </section>
</template>

<script>
import mainSection from "../UI/main-section.vue";
export default {
  components: {
    mainSection,
    mainSection,
  },
};
</script>
