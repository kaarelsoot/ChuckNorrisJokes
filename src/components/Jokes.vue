<template>
  <div class="jokes">
    <div @click="goBack" class="backButton">back</div>
    <Joke v-for="joke in jokes" :joke="joke"></Joke>
  </div>
</template>

<script>
import Joke from "./Joke";

export default {
  name: "jokes",
  components: {
    Joke
  },
  props: {
    category: String
  },
  computed: {
    jokes() {
      let category = this.$store.state.activeCategory;
      return this.$store.state.jokes[category];
    }
  },
  methods: {
    goBack() {
      this.$store.dispatch("selectCategory", { category: undefined });
    }
  }
};
</script>
<style scoped>
  .jokes {
    border: 2px solid green;
  }
  .backButton {
    background-color: lightgreen;
    margin: 5px;
  }
</style>
