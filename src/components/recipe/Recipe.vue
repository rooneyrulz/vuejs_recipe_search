<template>
  <div v-if="recipe" class="col col-sm-12 col-md-6 col-lg-3 mb-4">
    <div class="card text-left">
      <img class="card-img-top" :src="recipe.img" alt />
      <div class="card-body">
        <h4 class="card-title">{{ recipe.name }}</h4>
        <p class="card-text">Body</p>
      </div>
      <div class="card-footer">
        <router-link :data="recipe" :to="{ path: '/recipe/'+recipe.id, params: { recipe } }" class="btn btn-success">Check</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recipe",
  props: {
    recipe: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>
