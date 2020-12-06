<template>
  <div id="app">
    <Navbar />
    <Main />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

* {
  font-family: "Roboto", sans-serif;
}

body {
  @apply bg-gray-100;
}
</style>
