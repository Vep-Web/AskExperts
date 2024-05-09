<style scoped lang="scss">
.statistics {
  margin-top: 45px;
  background: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  column-gap: 135px;
  padding: 0;

  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

@media (max-width: 992px) {
  .statistics {
    flex-wrap: wrap;
  }
}

@media (max-width: 576px) {
  .statistics {
    margin-top: 20px;
    column-gap: 80px;

    &__title {
      font-size: 24px;
    }

    &__text {
      font-size: 16px;
    }
  }
}
</style>

<template>
  <ul class="statistics list-reset">
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
</template>

<script></script>
