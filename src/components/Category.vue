<template>
  <div class="category" @click="selectCategory">
    <p>category: {{ name }}</p>
    <p>stars: 0</p>
  </div>
</template>

<script>
export default {
  name: "category",
  props: {
    name: String
  },
  methods: {
    selectCategory() {
      let categoryName = this.name;
      console.log("SELECT CATEGORY: categoryName");
      console.log(categoryName);
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
