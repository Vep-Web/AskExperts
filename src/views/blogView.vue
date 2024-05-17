<style scoped></style>

<template>
  <section class="capital background bac-blog">
    <main-section class="capital__container">
      <template v-slot:name> Blog </template>

      <template v-slot:title> Latest Blogs & News </template>
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
