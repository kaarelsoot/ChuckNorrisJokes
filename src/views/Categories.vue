<template>
  <div>
    <div id="loadingIndicator" v-if="$store.state.isLoading">
      <p>loading</p>
    </div>
    <div v-if="!$store.state.isLoading">
      <p>ACTIVE CATEGORY: {{ $store.state.activeCategory }}</p>
      <Jokes v-if="$store.state.activeCategory" :category="'explicit'"></Jokes>

      <div id="categories" v-if="!$store.state.activeCategory">
        <ul>
          <div v-for="category in categories">
            <Category :name="category"></Category>
          </div>
        </ul>
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
