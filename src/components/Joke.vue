<template>
  <div class="joke">
    <p>Joke text haha</p>
    <p>NUPP vms</p>
  </div>
</template>

<script>
export default {
  name: "joke",
  props: {
    name: String
  }
};
</script>

<style scoped>
  .joke {
    margin: 5px;
    border: 1px solid blue;
  }
</style>
