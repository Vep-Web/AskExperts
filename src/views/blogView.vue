<style scoped></style>

<template>
  <section class="capital background bac-blog">
    <main-section class="capital__container">
      <template v-slot:name> Blog </template>

      <template v-slot:title> Latest Blogs & News </template>
    </main-section>
  </section>
  <section class="blog blog-width">
    <blog-section indentation="indentation">
      <slot>
        <card-ui class="card__item--blog">
          <template v-slot:top>
            <picture class="card__picture">
              <img
                class="card__img"
                src="/src/img/blog33.jpg"
                alt="Image article"
              />
            </picture>
          </template>
          <template v-slot:bot>
            <h3 class="card__title t-30">
              Five Steps to Implement Motivation in Management
            </h3>
            <p class="card__text t-16">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </p>
            <div class="card__footer">
              <div class="card__author">
                <img
                  width="60"
                  class="card__img card__img--radius"
                  src="/src/img/blog3.png"
                  alt="Author of the article John Carter"
                />
                <span class="card__name">John Carter</span>
              </div>
              <span class="card__data t-16">September 1, 2022</span>
              <router-link
                to="/blog-detail"
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
                src="/src/img/blog44.jpg"
                alt="Image article"
              />
            </picture>
          </template>
          <template v-slot:bot>
            <h3 class="card__title t-30">
              Team Identifiers, Benefits, and How to Build One that Works
            </h3>
            <p class="card__text t-16">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </p>
            <div class="card__footer">
              <div class="card__author">
                <img
                  width="60"
                  class="card__img card__img--radius"
                  src="/src/img/blog4.png"
                  alt="Author of the article John Carter"
                />
                <span class="card__name">John Carter</span>
              </div>
              <span class="card__data t-16">September 1, 2022</span>
              <router-link
                to="/blog-detail"
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
                src="/src/img/blog5.jpg"
                alt="Image article"
              />
            </picture>
          </template>
          <template v-slot:bot>
            <h3 class="card__title t-30">
              Professional Development Goals: Steps and Examples
            </h3>
            <p class="card__text t-16">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </p>
            <div class="card__footer">
              <div class="card__author">
                <img
                  width="60"
                  class="card__img card__img--radius"
                  src="/src/img/blog3.png"
                  alt="Author of the article John Carter"
                />
                <span class="card__name">John Carter</span>
              </div>
              <span class="card__data t-16">September 1, 2022</span>
              <router-link
                to="/blog-detail"
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
                src="/src/img/blog6.jpg"
                alt="Image article"
              />
            </picture>
          </template>
          <template v-slot:bot>
            <h3 class="card__title t-30">
              A Guide on What to Bring on the First Day of Work
            </h3>
            <p class="card__text t-16">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </p>
            <div class="card__footer">
              <div class="card__author">
                <img
                  width="60"
                  class="card__img card__img--radius"
                  src="/src/img/blog4.png"
                  alt="Author of the article John Carter"
                />
                <span class="card__name">John Carter</span>
              </div>
              <span class="card__data t-16">September 1, 2022</span>
              <router-link
                to="/blog-detail"
                class="card__link link-reset link link-black"
                >Read More</router-link
              >
            </div>
          </template>
        </card-ui>
      </slot>
    </blog-section>
  </section>
  <section class="newsletter">
    <newsletter-section></newsletter-section>
  </section>
</template>

<script>
import blogSection from "../components/section/home/blog.vue";
import mainSection from "../UI/main-section.vue";
import cardUi from "../UI/card.vue";
import newsletterSection from "../components/section/team/newsletter.vue";

export default {
  components: {
    mainSection,
    blogSection,
    cardUi,
    newsletterSection,
  },
};
</script>
