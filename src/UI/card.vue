<style scoped></style>

<template>
  <li class="card__item">
    <article class="card__article">
      <div class="card__top">
        <slot name="top"></slot>
      </div>
      <div class="card__bot">
        <slot name="bot"></slot>
      </div>
    </article>
  </li>
</template>

<script setup></script>
