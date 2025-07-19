import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import ContactUs from "@/views/ContatctUs.vue";
import Slot from "@/views/SlotPage.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: Home,
  },
  {
    name: "AboutPage",
    path: "/about",
    component: About,
  },
  {
    name: "ContactPage",
    path: "/contact",
    component: ContactUs,
  },
  {
    name: "SlotPage",
    path: "/slot",
    component: Slot,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
