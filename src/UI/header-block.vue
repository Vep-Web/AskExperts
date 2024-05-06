<style scoped>
.descr {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 148%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #181818;
  border-radius: 20px;
  padding: 0 12px;
  display: inline-block;
}

.descr-yellow {
  background-color: var(--yellow);
}

.descr-green {
  color: var(--white);
  background-color: var(--green);
}
</style>

<template>
  <span :class="['descr', `descr-${color}`]">
    <slot> </slot>
  </span>
</template>

<script>
export default {
  props: {
    color: {
      tupe: String,
      default: "yellow",
    },
  },
};
</script>
