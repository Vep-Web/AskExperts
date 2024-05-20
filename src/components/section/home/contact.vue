<style scoped></style>

<template>
  <div class="contact__container container">
    <contact-info></contact-info>
    <form class="contact__form form" action="#" method="POST">
      <label class="form__label">
        <span class="form__span t-16">Full Name</span>
        <input
          class="form__inp"
          type="text"
          minlength="2"
          maxlength="30"
          placeholder="john david"
        />
      </label>
      <label class="form__label">
        <span class="form__span t-16">Email</span>
        <input class="form__inp" type="email" placeholder="consult@mail.com" />
      </label>
      <label class="form__label">
        <span class="form__span t-16">Phone</span>
        <input class="form__inp" type="tel" placeholder="+008 654 231" />
      </label>
      <label class="form__label">
        <span class="form__span t-16">Company(optional)</span>
        <input class="form__inp" type="email" placeholder="yourcompany.com" />
      </label>
      <label class="form__label form__label--width">
        <span class="form__span t-16">Message</span>
        <textarea
          class="form__inp form__inp--width"
          minlength="2"
          maxlength="1000"
          placeholder="Briefly tell us about your project and your current goals. How can we help you?"
        ></textarea>
      </label>
      <button class="form__btn btn-reset link link-black" type="submit">
        Send Message
      </button>
    </form>
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
