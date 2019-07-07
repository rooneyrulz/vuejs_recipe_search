import Vue from "vue";
import "../bower_components/bootstrap/dist/css/bootstrap.css";
import "../bower_components/jquery/dist/jquery";
//import "../bower_components/bootstrap/dist/js/bootstrap";

import App from "./App.vue";
import Router from "./routes";

Vue.config.productionTip = false;

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
