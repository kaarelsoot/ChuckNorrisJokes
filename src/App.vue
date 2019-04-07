<template>
  <div id="app">
    <img alt="Chuck logo" src="./assets/logo.png" id="chuck-logo">
    <Categories></Categories>
  </div>
</template>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
  }
  .item {
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
  }
  .item:hover {
    box-shadow: 0 4px 6px #ccc;
    cursor: pointer;
  }
  .full-star {
    color: gold;
    font-size: 1.5rem;
  }
  .empty-star {
    color: lightgray;
    font-size: 1.5rem;
  }
  #chuck-logo {
    width: 10rem;
    margin-top: 1rem;
  }
</style>
<script>
  import Categories from "./views/Categories";
  export default {
    components: {Categories}
  }
</script>