<template>
  <div class="category item" @click="selectCategory">
    <div id="name">{{ name }}</div>
    <div id="stars">
      <font-awesome-icon icon="star" v-bind:class="{'full-star': favoriteCount > 0, 'empty-star': favoriteCount === 0 }" />
      <font-awesome-icon icon="star" v-bind:class="{'full-star': favoriteCount > 1, 'empty-star': favoriteCount <= 1 }" />
      <font-awesome-icon icon="star" v-bind:class="{'full-star': favoriteCount > 2, 'empty-star': favoriteCount <= 2 }" />
    </div>
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
    width: 15rem;
    height: 8rem;
    float: left;
    margin: 0.5rem;
  }
  #name {
    text-transform: capitalize;
    font-size: 2rem;
    position: relative;
    top: 35%;
    transform: translateY(-50%);
  }
  #stars {
    position: relative;
    top: 30%;
    transform: translateY(-50%);
  }
</style>
