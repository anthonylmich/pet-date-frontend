import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PetsIndex from "../views/PetsIndex.vue";
import PetsNew from "../views/PetsNew.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pets",
    name: "pets-index",
    component: PetsIndex,
  },
  {
    path: "/pets/new",
    name: "pets-create",
    component: PetsNew,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
