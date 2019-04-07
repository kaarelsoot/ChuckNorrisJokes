<template>
  <div class="jokes">
    <h3>Click on a joke to mark it as favorite!</h3>
<!--    <div @click="goBack" class="backButton">-->
      <font-awesome-icon icon="arrow-left" @click="goBack" class="backButton"/>
<!--    </div>-->
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
    margin-left: 2.5rem;
    margin-right: 2.5rem;

  }
  .backButton {
    text-transform: capitalize;
    padding: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5rem;
  }
  .backButton:hover {
    color: darkgray;
    cursor: pointer;
  }
</style>
