<template>
  <div>
    <pulse-loader v-if="$store.state.isLoading" color="black"></pulse-loader>

    <div v-if="!$store.state.isLoading">

      <div id="category-container" v-if="!$store.state.activeCategory">
        <h1>Chuck Norris Jokes</h1>
        <h3>Select a category to view jokes</h3>
        <div id="categories" class="category-container">
          <div v-for="category in categories" class="category-item">
            <Category :name="category" ></Category>
          </div>
        </div>
      </div>

      <div id="joke-container" v-if="$store.state.activeCategory">
        <Jokes :category="'explicit'"></Jokes>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "../components/Category";
import Jokes from "../components/Jokes";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: "home",
  components: {
    Category,
    Jokes,
    PulseLoader
  },
  created() {
    this.$store.dispatch("fetchCategories");
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    }
  }
};
</script>

<style scoped>
  .category-container {
    display: flex;
    flex-wrap: wrap;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
  @media only screen and (max-width: 70.5rem) {
    .category-container {
      display: block;
    }
  }
</style>
