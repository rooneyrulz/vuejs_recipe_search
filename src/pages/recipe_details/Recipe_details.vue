<template>
  <div id="recipe_details">
    <h1>{{ id }}</h1>
    <button @click="checkProps">Check Props</button>
  </div>
</template>

<script>
export default {
  name: "recipe_details",

  props: {
    data: {
      type: Object
    }
  },

  data() {
    return {
      id: this.$route.params.id,
      recipe: this.$route.params.recipe
    };
  },

  created() {
    this.checkProps();
  },

  methods: {
    checkProps() {
      console.log(this.recipe);
    }
  }
};
</script>

<style scoped>
</style>
