import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Artwork from "../views/ArtworkView.vue";
import Smc from "../views/artwork_folder/SmcView.vue";
import Vfr from "../views/artwork_folder/VfrView.vue";
import Cl from "../views/artwork_folder/ClView.vue";
import Xmc from "../views/artwork_folder/XmcView.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/artwork",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArtworkView.vue"),
  },
  {
    path: "/smc",
    name: "smc",
    component: Smc,
  },
  {
    path: "/vfr",
    name: "vfr",
    component: Vfr,
  },
  {
    path: "/cl",
    name: "cl",
    component: Cl,
  },
  {
    path: "/xmc",
    name: "xmc",
    component: Xmc,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
