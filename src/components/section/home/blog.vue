<style scoped></style>

<template>
  <div class="blog__container container">
    <div class="blog__header">
      <div class="blog__block">
        <header-block class="blog__descr" color="green">Blog</header-block>
        <h2 class="blog__title t-45">
          Take a look at our latest articles & resources
        </h2>
      </div>
      <a href="/error/" class="blog__link link-reset link link-yellow"
        >More News</a
      >
    </div>
    <ul
      :class="[
        'blog__list',
        'list-reset',
        'card',
        'card--column',
        `blog__list--${indentation}`,
      ]"
    >
      <card-ui class="card__item--blog">
        <template v-slot:top>
          <picture class="card__picture">
            <img
              class="card__img"
              src="/src/img/blog1.jpg"
              alt=""
              width=""
              height=""
            />
          </picture>
        </template>
        <template v-slot:bot>
          <h3 class="card__title t-30">
            Consulting Fees Study 2019 (And How To Raise Your Rates)
          </h3>
          <p class="card__text t-16">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div class="card__footer">
            <div class="card__author">
              <img
                class="card__img card__img--radius"
                src="/src/img/blog3.png"
                alt="Author of the article John Carter"
                width="60"
              />
              <span class="card__name">John Carter</span>
            </div>
            <span class="card__data t-16">September 1, 2022</span>
            <router-link
              to="error"
              class="card__link link-reset link link-black"
              >Read More</router-link
            >
          </div>
        </template>
      </card-ui>
      <card-ui class="card__item--blog">
        <template v-slot:top>
          <picture class="card__picture">
            <img
              class="card__img"
              src="/src/img/blog2.jpg"
              alt=""
              width=""
              height=""
            />
          </picture>
        </template>
        <template v-slot:bot>
          <h3 class="card__title t-30">
            What is growth hacking and how to apply it to your startup
          </h3>
          <p class="card__text t-16">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div class="card__footer">
            <div class="card__author">
              <img
                class="card__img card__img--radius"
                src="/src/img/blog4.png"
                alt="Author of the article John Carter"
              />
              <span class="card__name">Nayra Melson</span>
            </div>
            <span class="card__data t-16">September 1, 2022</span>
            <router-link
              to="error"
              class="card__link link-reset link link-black"
              >Read More</router-link
            >
          </div>
        </template>
      </card-ui>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import CardUi from "../../../UI/card.vue";
import headerBlock from "../../../UI/header-block.vue";

export default {
  components: {
    headerBlock,
    CardUi,
  },

  props: {
    indentation: {
      tupe: String,
      default: "",
    },
  },
};
</script>
