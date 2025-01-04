import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about-us",
      name: "about",
      component: AboutView,
    },

    {
      path: "/products",
      name: "products",
      component: ProductView,
    },
  ],
});

export default router;
