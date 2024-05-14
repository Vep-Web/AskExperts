<style scoped></style>

<template>
  <div class="process__container container">
    <picture class="process__picture">
      <source srcset="@/img/process.webp" type="image/webp" />
      <img
        class="process__img"
        src="@/img/process.jpg"
        alt=""
        width=""
        height=""
      />
    </picture>
    <div class="process__content">
      <header-block class="process__descr">Process</header-block>
      <h2 class="process__title t-45">Our Consuting Service Development</h2>
      <ul class="process__list list-reset">
        <li class="process__item">
          <article class="process__article">
            <h3 class="process__header t-20">Banking and Finance</h3>
            <p class="process__text t-16">
              Professionally fashion wireless leadership rather than prospective
              experiences my cardinate clicks-and-mortar testing whereas.
            </p>
          </article>
        </li>
        <li class="process__item">
          <article class="process__article">
            <h3 class="process__header t-20">Logistic and Transportation</h3>
            <p class="process__text t-16">
              Compellingly embrace empowered e-business after user friendly
              intellectual capital. Interactively actualize front-end processes.
            </p>
          </article>
        </li>
        <li class="process__item">
          <article class="process__article">
            <h3 class="process__header t-20">Trading</h3>
            <p class="process__text t-16">
              Uniquely matrix economically sound value through cooperative
              technology parallel task fully researched data and enterprise.
            </p>
          </article>
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
