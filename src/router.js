import Vue from "vue";
import Router from "vue-router";
import Phones from "./views/Phones.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "phones",
    component: Phones
  }
];

export default new Router({
  routes
});
