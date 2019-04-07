<template>
  <div>
    <div id="loadingIndicator" v-if="$store.state.isLoading">
      <p>loading</p>
    </div>
    <div v-if="!$store.state.isLoading">
      <div id="joke-container" v-if="$store.state.activeCategory">
        <Jokes :category="'explicit'"></Jokes>
      </div>
      <div id="category-container" v-if="!$store.state.activeCategory">
        <h1>Chuck Norris Jokes</h1>
        <h3>Select a category to view jokes</h3>
        <div id="categories" class="category-container">
          <div v-for="category in categories" class="category-item">
            <Category :name="category" ></Category>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "../components/Category";
import Jokes from "../components/Jokes";

export default {
  name: "categories",
  components: {
    Category,
    Jokes
  },
  created() {
    console.log("store dispatch");
    this.$store.dispatch("fetchCategories");
    console.log("store -> categories:");
    console.log(this.$store.state);
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
  }
};
</script>

<style scoped>
  .category-container {
    /*border: 2px solid blue;*/
    display: flex;
    flex-wrap: wrap;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
  .category-item {

  }
</style>
