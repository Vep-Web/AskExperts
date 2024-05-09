<style scoped></style>

<template>
  <div class="container">
    <div class="capital__content">
      <header-block>
        <slot name="name"></slot>
        <slot></slot>
      </header-block>
      <h1 class="capital__title t-50">
        <slot name="title"></slot>
      </h1>
    </div>
  </div>
</template>

<script>
import headerBlock from "./header-block.vue";

export default {
  components: {
    headerBlock,
  },
};
</script>
