<template>
  <div id="home">
    <div class="jumbotron">
      <h1 class="display-3 mb-5">Recipes List</h1>
      <p class="lead">
        <router-link class="btn btn-primary btn-lg" to="/recipes" role="button">Check Recipes</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
h1 {
  font-family: 'Operator Mono';
  font-weight: bold;
}

.btn {
  font-family: 'Operator Mono';
  padding: 1rem 2rem;
}
</style>
