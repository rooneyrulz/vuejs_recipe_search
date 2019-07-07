<template>
  <div id="recipes">
    <input v-model="search" type="text" class="form-control mb-5" placeholder="Search Recipes" />
    <div class="row">
      <Recipe v-for="recipe in filteredRecipe" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import Recipe from "../../components/recipe/Recipe";
import imgUrl_1 from "../../assets/recipe_img/img_1 (1).jpeg";
import imgUrl_2 from "../../assets/recipe_img/img_2 (1).jpg";
import imgUrl_3 from "../../assets/recipe_img/img_3 (2).jpeg";
import imgUrl_4 from "../../assets/recipe_img/img_4 (2).jpg";
import imgUrl_5 from "../../assets/recipe_img/img_5 (3).jpeg";
import imgUrl_6 from "../../assets/recipe_img/img_6 (4).jpeg";
import imgUrl_7 from "../../assets/recipe_img/img_7 (5).jpeg";
import imgUrl_8 from "../../assets/recipe_img/img_8 (6).jpeg";
import imgUrl_9 from "../../assets/recipe_img/img_9 (7).jpeg";

export default {
  name: "recipes",
  components: {
    Recipe
  },
  data() {
    return {
      search: "",
      recipes: [
        {
          id: 49304934,
          name: "Recipe 1",
          img: imgUrl_1,
          date: Date.now().toString()
        },

        {
          id: 57485748,
          name: "Recipe 2",
          img: imgUrl_2,
          date: Date.now().toString()
        },

        {
          id: 32839238,
          name: "Recipe 3",
          img: imgUrl_3,
          date: Date.now().toString()
        },

        {
          id: 5940594,
          name: "Recipe 4",
          img: imgUrl_4,
          date: Date.now().toString()
        },
        {
          id: 38293823,
          name: "Recipe 5",
          img: imgUrl_5,
          date: Date.now().toString()
        },
        {
          id: 47348738,
          name: "Recipe 6",
          img: imgUrl_6,
          date: Date.now().toString()
        },
        {
          id: 493049343,
          name: "Recipe 7",
          img: imgUrl_7,
          date: Date.now().toString()
        },
        {
          id: 473463746,
          name: "Recipe 8",
          img: imgUrl_8,
          date: Date.now().toString()
        },
        {
          id: 7837238273,
          name: "Recipe 9",
          img: imgUrl_9,
          date: Date.now().toString()
        }
      ]
    };
  },

  computed: {
    filteredRecipe() {
      return this.recipes.filter(recipe => {
        return recipe.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
</style>
