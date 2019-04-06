<template>
  <div class="joke" @click="">
    <p>{{ joke.value }}</p>
  </div>
</template>

<script>
export default {
  name: "joke",
  props: {
    joke: Object
  }
};
</script>

<style scoped>
  .joke {
    margin: 5px;
    border: 1px solid blue;
  }
</style>
