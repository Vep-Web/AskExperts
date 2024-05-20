<style scoped></style>

<template>
  <div class="contact__container contact__container--width container">
    <contact-info class="contact__left--m"></contact-info>
    <picture>
      <source srcset="@/img/contact.webp" type="image/webp" />
      <img class="contact__img" src="@/img/contact.jpg" alt="Decorativ image" />
    </picture>
  </div>
</template>

<script>
import contactInfo from "../../../UI/contact-info.vue";

export default {
  components: {
    contactInfo,
  },
};
</script>
