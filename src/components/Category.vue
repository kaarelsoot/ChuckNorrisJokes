<template>
  <div class="category" @click="selectCategory">
    <p>category: {{ name }}</p>
    <p>stars: {{ favoriteCount }}</p>
  </div>
</template>

<script>
export default {
  name: "category",
  props: {
    name: String
  },
  computed: {
    favoriteCount() {
      return this.$store.getters.getFavoriteCount(this.name);
    }
  },
  methods: {
    selectCategory() {
      let categoryName = this.name;
      this.$store.dispatch("selectCategory", { category: categoryName });
    }
  }
};
</script>

<style scoped>
  .category {
    border: 2px solid red;
  }
</style>
