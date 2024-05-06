<style scoped></style>

<template>
  <div class="feedback__container container">
    <header-block class="feedback__descr" color="green"
      >Client Feedback</header-block
    >
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :modules="modules"
      class="feedback__swiper mySwiper"
    >
      <div ref="prev" class="swiper-button-prev feedback__btn-prev">Prev</div>
      <div ref="next" class="swiper-button-next feedback__btn-next">Next</div>
      <swiper-slide class="feedback__slide">
        <h2 class="feedback__title t-40">
          “Lorem ipsum dolor sit amet, consectetur
          <span class="feedback__span t-40">
            adipiscing elit, sed do eiusmod
          </span>
          tempor incididunt ut labore et dolore”
        </h2>
        <div class="feedback__profile">
          <picture>
            <source srcset="@/img/ava.webp" type="image/webp" />
            <img
              src="@/img/ava.jpg"
              alt=""
              width="210"
              height="210"
              class="feedback__img"
            />
          </picture>
          <h3 class="feedback__title feedback__title--color t-20">
            Kathleen Smith
          </h3>
          <span class="feedback__profession t-16">Web Designer</span>
        </div>
      </swiper-slide>
      <swiper-slide class="feedback__slide">
        <h2 class="feedback__title t-40">
          “Lorem ipsum dolor sit amet, consectetur
          <span class="feedback__span t-40">
            adipiscing elit, sed do eiusmod
          </span>
          tempor incididunt ut labore et dolore”
        </h2>
        <div class="feedback__profile">
          <picture>
            <source srcset="@/img/ava.webp" type="image/webp" />
            <img
              src="@/img/ava.jpg"
              alt=""
              width="210"
              height="210"
              class="feedback__img"
            />
          </picture>
          <h3 class="feedback__title feedback__title--color t-20">
            Kathleen Smith
          </h3>
          <span class="feedback__profession t-16">Web Designer</span>
        </div>
      </swiper-slide>
      <swiper-slide class="feedback__slide">
        <h2 class="feedback__title t-40">
          “Lorem ipsum dolor sit amet, consectetur
          <span class="feedback__span t-40">
            adipiscing elit, sed do eiusmod
          </span>
          tempor incididunt ut labore et dolore”
        </h2>
        <div class="feedback__profile">
          <picture>
            <source srcset="@/img/ava.webp" type="image/webp" />
            <img
              src="@/img/ava.jpg"
              alt=""
              width="210"
              height="210"
              class="feedback__img"
            />
          </picture>
          <h3 class="feedback__title feedback__title--color t-20">
            Kathleen Smith
          </h3>
          <span class="feedback__profession t-16">Web Designer</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import headerBlock from "../../../UI/header-block.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    headerBlock,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
};
</script>
