import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CatalogPage from "../views/CatalogPage.vue";
import MainPage from "../views/MainPage.vue";
import ProfilePage from "../views/ProfilPage.vue";
import auth from "./middleware/auth";
import store from "@/store";
import middlewarePipeline from "./middlewarePipeline";
const routes: Array<RouteRecordRaw> = [
  { path: "/", component: MainPage },
  { path: "/Catalog", name: "Catalog", component: CatalogPage },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfilePage,
    meta: {
      middleware: [auth],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware: any = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store,
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
