<style scoped></style>

<template>
  <div class="case__container container">
    <ul class="case__menu list-reset">
      <li class="case__item" v-for="tab in tabList" :key="tab.id">
        <button class="case__btn btn-reset" @click="openList(tab)">
          {{ tab.text }}
        </button>
      </li>
    </ul>
    <photo-content v-if="block === 1" class="case__list"></photo-content>
    <photo-content v-if="block === 2" class="case__list"></photo-content>
    <photo-content v-if="block === 3" class="case__list"></photo-content>
    <photo-content v-if="block === 4" class="case__list"></photo-content>
    <photo-content v-if="block === 5" class="case__list"></photo-content>
  </div>
</template>

<script>
import { ref } from "vue";
import photoContent from "../../../UI/photo-content.vue";

export default {
  components: {
    photoContent,
  },

  data() {
    return {
      block: 1,
    };
  },

  methods: {
    openList(tab) {
      this.block = tab.id;
    },
  },

  computed: {
    isActive: function () {
      if (this.status == true) {
        return "btn-active";
      } else {
        return "btn";
      }
    },
  },

  setup() {
    const tabList = ref([
      {
        id: 1,
        text: "All",
      },
      {
        id: 2,
        text: "Taxes & Efficiency",
      },
      {
        id: 3,
        text: "Investment banking",
      },
      {
        id: 4,
        text: "Financial Plan",
      },
      {
        id: 5,
        text: "Audit & Evaluation",
      },
    ]);

    return {
      tabList,
    };
  },
};
</script>
