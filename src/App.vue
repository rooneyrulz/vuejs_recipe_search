<template>
  <div id="app">
    <AppHeader />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from "./layouts/header/AppHeader";

export default {
  name: "app",
  components: {
    AppHeader
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  align-items: center;
  overflow-x: hidden;
}
</style>
