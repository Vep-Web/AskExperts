<style scoped></style>

<template>
  <div class="history__container container">
    <div class="history__content">
      <header-block class="history__descr" color="green"
        ><slot name="descr"></slot>
      </header-block>

      <slot name="title"></slot>

      <p class="history__text t-16">
        <slot name="text" color="colo"></slot>
      </p>
      <div class="history__video-block">
        <slot name="video"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import headerBlock from "../../../UI/header-block.vue";

export default {
  data() {},

  props: {
    color: {
      tupe: String,
    },
  },
  components: {
    headerBlock,
  },
};
</script>
