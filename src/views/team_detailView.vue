<style scoped></style>

<template>
  <section class="bio">
    <bio-section></bio-section>
  </section>
  <section class="distribution">
    <distribution-section></distribution-section>
  </section>
</template>

<script>
import bioSection from "../components/section/team-detail/bio.vue";
import distributionSection from "../components/section/team-detail/distribution.vue";

export default {
  data() {},
  components: {
    bioSection,
    distributionSection,
  },
};
</script>
