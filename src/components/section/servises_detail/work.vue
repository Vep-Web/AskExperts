<style scoped></style>

<template>
  <div class="work__container container">
    <picture class="work__img">
      <source srcset="@/img/work.webp" type="image/webp" />
      <img class="work__img" src="@/img/work.jpg" alt="Decorativ image" />
    </picture>
    <div class="work__left">
      <header-block class="work__descr">WE'LL WORK WITH YOU</header-block>
      <h2 class="work__title t-45">What To Expect</h2>
      <p class="work__text t-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ul class="work__list list-reset">
        <li class="work__item">
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day.
        </li>
        <li class="work__item">
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test override the digital.
        </li>
      </ul>
    </div>
  </div>
  <client-ui></client-ui>
</template>

<script>
import headerBlock from "../../../UI/header-block.vue";
import clientUi from "../../../UI/client.vue";

export default {
  components: {
    headerBlock,
    clientUi,
  },
};
</script>
