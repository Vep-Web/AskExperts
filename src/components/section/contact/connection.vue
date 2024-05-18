<style scoped></style>

<template>
  <div class="connection__container container">
    <picture>
      <source srcset="@/img/connection.webp" type="image/webp" />
      <img
        class="connection__img"
        src="@/img/connection.jpg"
        alt="Decorativ photo"
      />
    </picture>

    <div class="connection__content">
      <header-block class="connection__descr" color="green"
        >Let’s talk</header-block
      >
      <h2 class="connection__title t-45">Get In Touch With Us</h2>
      <p class="connection__text t-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <ul class="connection__list list-reset">
        <li class="connection__item">
          <h3 class="connection__title tsmal-16">Have Any Question?</h3>
          <a href="tel:01238543987" class="connection__link link-reset"
            >Free +01 238 543 987</a
          >
        </li>
        <li class="connection__item">
          <h3 class="connection__title tsmal-16">Write Email</h3>
          <a
            href="mailto:Info@consultalk.com"
            class="connection__link link-reset"
            >Info@consultalk.com</a
          >
        </li>
        <li class="connection__item">
          <h3 class="connection__title tsmal-16">Visit Anytime</h3>
          <span class="connection__span"
            >King Street, Prior Lake, New York.</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headerBlock from "../../../UI/header-block.vue";

export default {
  components: {
    headerBlock,
  },
};
</script>
