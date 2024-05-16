<style scoped>
#app {
  font-family: var(--font-family), var(--second-family), sans-serif;
}
</style>

<template>
  <header class="header">
    <header-component :openBurgerMenu="openBurgerMenu"></header-component>
    <burger-modal v-if="open" :closeBurgerMenu="closeBurgerMenu"></burger-modal>
  </header>
  <main class="main">
    <router-view></router-view>
  </main>
  <footer class="footer">
    <footer-component></footer-component>
  </footer>
</template>

<script>
import headerComponent from "./components/header.vue";
import footerComponent from "./components/footer.vue";
import burgerModal from "./components/modal/burger-modal.vue";

export default {
  data() {
    return {
      open: false,
    };
  },
  components: {
    headerComponent,
    footerComponent,
    burgerModal,
  },
  methods: {
    openBurgerMenu() {
      this.open = true;
    },
    closeBurgerMenu() {
      this.open = false;
    },
  },
};
</script>
