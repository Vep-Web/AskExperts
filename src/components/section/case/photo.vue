<style scoped></style>

<template>
  <div class="photo__container container">
    <h2 class="photo__title t-40">More case studies</h2>
    <ul class="photo__list list-reset">
      <li class="photo__item">
        <router-link
          to="/error"
          class="photo__link photo__link--block link-reset"
        >
          <picture>
            <source srcset="@/img/analytical4.webp" type="image/webp" />
            <img
              class="photo__img"
              src="@/img/analytical4.jpg"
              alt="Case project"
            />
          </picture>
        </router-link>
      </li>
      <li class="photo__item">
        <router-link
          to="/error"
          class="photo__link photo__link--block link-reset"
        >
          <picture>
            <source srcset="@/img/analytical5.webp" type="image/webp" />
            <img
              class="photo__img"
              src="@/img/analytical5.jpg"
              alt="Case project"
            />
          </picture>
        </router-link>
      </li>
      <li class="photo__item">
        <router-link
          to="/error"
          class="photo__link photo__link--block link-reset"
        >
          <picture>
            <source srcset="@/img/analytical6.webp" type="image/webp" />
            <img
              class="photo__img"
              src="@/img/analytical6.jpg"
              alt="Case project"
            />
          </picture>
        </router-link>
      </li>
    </ul>
    <router-link to="/" class="photo__link link-reset link link-black"
      >Browse all case studies</router-link
    >
  </div>
</template>

<script></script>
