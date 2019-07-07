<template>
  <nav id="app-header" class="navbar navbar-expand-sm navbar-dark bg-dark py-3 mb-5">
    <div class="container">
      <router-link :exact="isExact" class="navbar-brand" to="/recipes">Recipe List</router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link :exact="isExact" exact-active-class="active" class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :exact="isExact" exact-active-class="active" class="nav-link" to="/recipes">Recipes</router-link>
          </li>
          <li class="nav-item">
            <router-link :exact="isExact" exact-active-class="active" class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      isExact: true
    };
  }
};
</script>

<style scoped>
.navbar {
}

.navbar-brand {
  font-family: "Operator Mono";
  font-weight: bold;
}

</style>
