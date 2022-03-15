import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PetsIndex from "../views/PetsIndex.vue";
import PetsNew from "../views/PetsNew.vue";
import SignupPage from "../views/SignupPage.vue";
import LoginPage from "../views/LoginPage.vue";
import LogoutPage from "../views/LogoutPage.vue";

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
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage,
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage,
  },
  {
    path: "/logout",
    name: "logout-page",
    component: LogoutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
