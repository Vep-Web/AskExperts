<style scoped></style>

<template>
  <div class="questions__container container">
    <div class="questions__content">
      <header-block class="questions__descr" color="green">FAQ</header-block>
      <h2 class="questions__title t-45">Customer Questions</h2>
      <ul class="questions__list list-reset">
        <li class="questions__item" v-for="item in accItems" :key="item.id">
          <button class="questions__btn btn-reset" @click="showAcc(item)">
            {{ item.title }}
            <span
              class="questions__decor open-decor"
              v-if="!item.isOpen"
            ></span>
            <span
              class="questions__decor close-decor"
              v-if="item.isOpen"
            ></span>
          </button>
          <div class="questions__block t-16" v-if="item.isOpen">
            {{ item.text }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import headerBlock from "../../../UI/header-block.vue";

export default {
  data() {
    return {
      flag: true,
    };
  },
  components: {
    headerBlock,
  },

  methods: {
    showBlock(item) {
      if (this.flag) {
        return (this.flag = false);
      } else {
        return (this.flag = true);
      }
    },
  },

  setup() {
    const accItems = ref([
      {
        id: 1,
        title: "What will happen when I’ve sent my application?",
        text: "Ippsum is the result of synergy between our teams and our customers.Our company culture is focused on excellent productivity, customersatisfaction, respect for team and individual achievements.",
        isOpen: false,
      },
      {
        id: 2,
        title: "Can I get a free trial before I purchase?",
        text: "Ippsum is the result of synergy between our teams and our customers.Our company culture is focused on excellent productivity, customersatisfaction, respect for team and individual achievements.",
        isOpen: true,
      },
      {
        id: 3,
        title: "What should I include in my personal statement?",
        text: "Ippsum is the result of synergy between our teams and our customers.Our company culture is focused on excellent productivity, customersatisfaction, respect for team and individual achievements.",
        isOpen: false,
      },
      {
        id: 4,
        title: "Will membership plans be charged automatically?",
        text: "Ippsum is the result of synergy between our teams and our customers.Our company culture is focused on excellent productivity, customersatisfaction, respect for team and individual achievements.",
        isOpen: false,
      },
      {
        id: 5,
        title: "What will happen when I’ve sent my application?",
        text: "Ippsum is the result of synergy between our teams and our customers.Our company culture is focused on excellent productivity, customersatisfaction, respect for team and individual achievements.",
        isOpen: false,
      },
      {
        id: 6,
        title: "Can I get a free trial before I purchase?",
        text: "Ippsum is the result of synergy between our teams and our customers.Our company culture is focused on excellent productivity, customersatisfaction, respect for team and individual achievements.",
        isOpen: false,
      },
    ]);

    const showAcc = (item) => {
      item.isOpen = !item.isOpen;
    };

    return {
      accItems,
      showAcc,
    };
  },
};
</script>
