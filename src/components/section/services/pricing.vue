<style scoped></style>

<template>
  <div class="pricing__container container">
    <header-block class="pricing__descr" color="green">Pricing</header-block>
    <h2 class="pricing__title t-45">Our Pricing Plan</h2>
    <ul class="pricing__list list-reset">
      <li class="pricing__item">
        <article class="pricing__article">
          <div class="pricing__headers">
            <div class="pricing__decor"></div>
            <div class="pricing__block">
              <h3 class="pricing__header t-25">Basic Plan</h3>
              <p class="pricing__text t-16">
                The argument in favor of using to filler text goes something.
              </p>
            </div>
            <div class="pricing__price">
              <span class="pricing__value t-50">$35</span>
              <header-block class="pricing__descr" color="grey"
                >Monthly</header-block
              >
            </div>
          </div>
          <div class="pricing__footer">
            <ul class="pricing__description list-reset">
              <li class="pricing__item pricing__item--p">
                24/7 system monitoring
              </li>
              <li class="pricing__item pricing__item--p">
                Security management
              </li>
              <li class="pricing__item pricing__item--p">
                Secure finance backup
              </li>
              <li class="pricing__item pricing__item--p">Remote support</li>
            </ul>
            <a href="#" class="pricing__link link link-reset link-white"
              >Get This Plan</a
            >
          </div>
        </article>
      </li>
      <li class="pricing__item">
        <article class="pricing__article">
          <div class="pricing__headers">
            <div class="pricing__decor"></div>
            <div class="pricing__block">
              <h3 class="pricing__header t-25">Standard Plan</h3>
              <p class="pricing__text t-16">
                The argument in favor of using to filler text goes something.
              </p>
            </div>

            <div class="pricing__price">
              <span class="pricing__value t-50">$56</span>
              <header-block class="pricing__descr" color="green"
                >Monthly</header-block
              >
            </div>
          </div>
          <div class="pricing__footer">
            <ul class="pricing__description list-reset">
              <li class="pricing__item pricing__item--p">
                24/7 system monitoring
              </li>
              <li class="pricing__item pricing__item--p">
                Security management
              </li>
              <li class="pricing__item pricing__item--p">
                Secure finance backup
              </li>
              <li class="pricing__item pricing__item--p">Remote support</li>
            </ul>
            <a
              href="#"
              class="pricing__link pricing__link--b link link-reset link-yellow"
              >Get This Plan</a
            >
          </div>
        </article>
      </li>
      <li class="pricing__item">
        <article class="pricing__article">
          <div class="pricing__headers">
            <div class="pricing__decor"></div>
            <div class="pricing__block">
              <h3 class="pricing__header t-25">Standard Plan</h3>
              <p class="pricing__text t-16">
                The argument in favor of using to filler text goes something.
              </p>
            </div>

            <div class="pricing__price">
              <span class="pricing__value t-50">$75</span>
              <header-block class="pricing__descr" color="grey"
                >Monthly</header-block
              >
            </div>
          </div>
          <div class="pricing__footer">
            <ul class="pricing__description list-reset">
              <li class="pricing__item pricing__item--p">
                24/7 system monitoring
              </li>
              <li class="pricing__item pricing__item--p">
                Security management
              </li>
              <li class="pricing__item pricing__item--p">
                Secure finance backup
              </li>
              <li class="pricing__item pricing__item--p">Remote support</li>
            </ul>
            <a href="#" class="pricing__link link link-reset link-white"
              >Get This Plan</a
            >
          </div>
        </article>
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
