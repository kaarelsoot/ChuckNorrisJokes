<template>
  <div class="joke" @click="toggleFavoriteStatus">
    <p>{{ joke.value }}</p>
    <p v-if="joke.favorite">fav!</p>
  </div>
</template>

<script>
export default {
  name: "joke",
  props: {
    joke: Object
  },
  methods: {
    toggleFavoriteStatus() {
      if (this.joke.favorite) {
        this.$store.commit("removeJokeFromFavorites", { jokeId: this.joke.id });
      } else {
        this.$store.commit("addJokeToFavorites", { jokeId: this.joke.id });
      }
    }
  }
};
</script>

<style scoped>
  .joke {
    margin: 5px;
    border: 1px solid blue;
  }
</style>
