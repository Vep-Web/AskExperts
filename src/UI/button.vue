<style scoped lang="scss"></style>

<template>
  <router-link :class="['btn', 'list-reset', `btn-${color}`]">
    <slot>Our Services</slot>
  </router-link>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "black",
      linkTo: "",
    },
  },

  routes: {},
};
</script>
