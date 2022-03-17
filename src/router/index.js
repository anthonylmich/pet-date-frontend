import { createRouter, createWebHistory } from "vue-router";
import SignupPage from "../views/SignupPage.vue";
import LoginPage from "../views/LoginPage.vue";
import LogoutPage from "../views/LogoutPage.vue";
import UsersShow from "../views/UsersShow.vue";
import HomeView from "../views/HomeView.vue";
import PetsIndex from "../views/PetsIndex.vue";
import PetsNew from "../views/PetsNew.vue";
import PetsShow from "../views/PetsShow.vue";
import PetsEdit from "../views/PetsEdit.vue";
import UsersEdit from "../views/UsersEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
  {
    path: "/users/:id",
    name: "profile-page",
    component: UsersShow,
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
    path: "/pets/:id",
    name: "pets-show",
    component: PetsShow,
  },
  {
    path: "/pets/:id/edit",
    name: "pets-edit",
    component: PetsEdit,
  },
  {
    path: "/Users/:id/edit",
    name: "Users-edit",
    component: UsersEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
