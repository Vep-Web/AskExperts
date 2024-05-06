<style scoped></style>

<template>
  <div class="analytical__bac">
    <img
      class="analytical__image"
      src="@/img/Background.png"
      alt="background image"
    />
  </div>
  <div class="analytical__content">
    <div class="analytical__header">
      <div class="analytical__block">
        <header-block class="analytical__descr" color="green"
          >Proccess</header-block
        >
        <h2 class="analytical__title t-45">
          Our client, global analytical techno company, wanted to build market.
        </h2>
      </div>
      <router-link
        to="error/"
        class="analytical__link link-reset link link-yellow"
        >More Gallery</router-link
      >
    </div>
    <ul class="analytical__list list-reset">
      <li class="analytical__item">
        <router-link
          class="analytical__link-castom link-castom link-reset"
          to="error/"
        >
          <picture>
            <source srcset="@/img/analytical1.webp" type="image/webp" />
            <img
              src="@/img/analytical1.jpg"
              alt="Photos from gallery"
              class="link-castom__image"
            />
          </picture>
          <div class="link-castom__hover">
            <span class="link-castom__span">+</span>
            <h3 class="link-castom__title t-25">Taxes & Efficiency</h3>
            <span class="link-castom__text t-16">Business</span>
          </div>
        </router-link>
      </li>
      <li class="analytical__item">
        <router-link
          class="analytical__link-castom link-castom link-reset"
          to="error/"
        >
          <picture>
            <source srcset="@/img/analytical2.webp" type="image/webp" />
            <img
              src="@/img/analytical2.jpg"
              alt="Photos from gallery"
              class="link-castom__image"
            />
          </picture>
          <div class="link-castom__hover">
            <span class="link-castom__span">+</span>
            <h3 class="link-castom__title t-25">Taxes & Efficiency</h3>
            <span class="link-castom__text t-16">Business</span>
          </div>
        </router-link>
      </li>
      <li class="analytical__item">
        <router-link
          class="analytical__link-castom link-castom link-reset"
          to="error/"
        >
          <picture>
            <source srcset="@/img/analytical3.webp" type="image/webp" />
            <img
              src="@/img/analytical3.jpg"
              alt="Photos from gallery"
              class="link-castom__image"
            />
          </picture>
          <div class="link-castom__hover">
            <span class="link-castom__span">+</span>
            <h3 class="link-castom__title t-25">Taxes & Efficiency</h3>
            <span class="link-castom__text t-16">Business</span>
          </div>
        </router-link>
      </li>
      <li class="analytical__item">
        <router-link
          class="analytical__link-castom link-castom link-reset"
          to="error/"
        >
          <picture>
            <source srcset="@/img/analytical4.webp" type="image/webp" />
            <img
              src="@/img/analytical4.jpg"
              alt="Photos from gallery"
              class="link-castom__image"
            />
          </picture>
          <div class="link-castom__hover">
            <span class="link-castom__span">+</span>
            <h3 class="link-castom__title t-25">Taxes & Efficiency</h3>
            <span class="link-castom__text t-16">Business</span>
          </div>
        </router-link>
      </li>
      <li class="analytical__item">
        <router-link
          class="analytical__link-castom link-castom link-reset"
          to="error/"
        >
          <picture>
            <source srcset="@/img/analytical5.webp" type="image/webp" />
            <img
              src="@/img/analytical5.jpg"
              alt="Photos from gallery"
              class="link-castom__image"
            />
          </picture>
          <div class="link-castom__hover">
            <span class="link-castom__span">+</span>
            <h3 class="link-castom__title t-25">Taxes & Efficiency</h3>
            <span class="link-castom__text t-16">Business</span>
          </div>
        </router-link>
      </li>
      <li class="analytical__item">
        <router-link
          class="analytical__link-castom link-castom link-reset"
          to="error/"
        >
          <picture>
            <source srcset="@/img/analytical6.webp" type="image/webp" />
            <img
              src="@/img/analytical6.jpg"
              alt="Photos from gallery"
              class="link-castom__image"
            />
          </picture>
          <div class="link-castom__hover">
            <span class="link-castom__span">+</span>
            <h3 class="link-castom__title t-25">Taxes & Efficiency</h3>
            <span class="link-castom__text t-16">Business</span>
          </div>
        </router-link>
      </li>
    </ul>
    <ul class="analytical__list statistics list-reset">
      <li class="statistics__item">
        <h3 class="statistics__title t-50">1128+</h3>
        <span class="statistics__text t-18">Successful Work</span>
      </li>
      <li class="statistics__item">
        <h3 class="statistics__title t-50">908+</h3>
        <span class="statistics__text t-18">Team member</span>
      </li>
      <li class="statistics__item">
        <h3 class="statistics__title t-50">258+</h3>
        <span class="statistics__text t-18">Happy Customers</span>
      </li>
      <li class="statistics__item">
        <h3 class="statistics__title t-50">564+</h3>
        <span class="statistics__text t-18">Creative Idea</span>
      </li>
    </ul>
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
