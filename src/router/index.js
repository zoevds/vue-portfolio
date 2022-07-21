import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/About.vue"),
  },

  {
    path: "/projects",
    name: "projects",

    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/testimonials",
    name: "testimonials",

    component: () => import("../views/Testimonials.vue"),
  },
  {
    path: "/contact",
    name: "contact",

    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
