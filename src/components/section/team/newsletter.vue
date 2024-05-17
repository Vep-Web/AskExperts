<style scoped></style>

<template>
  <div class="newsletter__container container">
    <div class="newsletter__content">
      <header-block class="newsletter__descr" color="grey"
        >Contact</header-block
      >
      <h2 class="newsletter__title t-45">Ready To Talk?</h2>
      <p class="newsletter__text t-16">
        Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa
        placerat duis ultricies lacus sed turpis. Pellentesque pellentesque
        habitant morbi tristique.
      </p>
      <form class="newsletter__form form form--flex" action="#" method="POST">
        <label class="form__label">
          <input
            class="form__inp form__inp--newsletter"
            type="email"
            placeholder="your mail address"
          />
        </label>
        <button
          class="form__btn form__btn--padding btn-reset link link-green"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
    <picture class="newsletter__picture">
      <source srcset="@/img/newsletter.webp" type="image/webp" />
      <img
        class="newsletter__img"
        src="@/img/newsletter.png"
        alt=""
        width="640"
        height="410"
      />
    </picture>
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
