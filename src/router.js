import { createRouter, createWebHistory } from "vue-router";
import home from "./pages/home/index.vue";
import auth from "./pages/auth/index.vue";
import store from "./store";

const routes = [
  { path: "/", name: "home", component: home, meta: { private: true } },
  { path: "/auth", name: "auth", component: auth },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const state = store.state;
  if (to.meta.private && !state.user.currentUser) {
    console.log("No user");
    next({ name: "auth" });
  } else {
    next();
  }
});

export default router;
