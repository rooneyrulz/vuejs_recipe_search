import Vue from "vue";
import Router from "vue-router";

// Components
import Home from "./pages/home/Home.vue";
import About from "./pages/about/About.vue";

Vue.use(Router);

const Recipes = () => import("./pages/recipes/Recipes.vue");

const Recipe_details = () =>
  import("./pages/recipe_details/Recipe_details.vue");

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: Home
    },

    {
      name: "recipes",
      path: "/recipes",
      component: Recipes
    },

    {
      name: "about",
      path: "/about",
      component: About
    },

    {
      name: "recipe_details",
      path: "/recipe/:id",
      component: Recipe_details,
      props: true
    }
  ],
  mode: "history"
});
