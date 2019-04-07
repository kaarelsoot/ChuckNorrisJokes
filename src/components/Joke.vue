<template>
  <div class="joke item" @click="toggleFavoriteStatus">
    <p>{{ joke.value }}</p>
    <font-awesome-icon icon="star" v-if="joke.favorite" class="full-star"/>
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
    margin: 1rem;
    padding: 1rem;
  }
</style>
