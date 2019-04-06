<template>
  <div class="jokes">
    <Joke></Joke>
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
    categories() {
      return this.$store.getters.getCategories;
    }
  }
};
</script>
<style scoped>
  .jokes {
    border: 2px solid green;
  }
</style>
