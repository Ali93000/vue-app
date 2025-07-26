import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import ContactUs from "@/views/ContactUs.vue";
import Slot from "@/views/SlotPage.vue";
import AddStudent from "@/views/AddStudentPage.vue";
import Products from "@/views/ProductsPage.vue";
import CrudStudents from "@/views/CrudStudentsPage.vue";

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
  {
    name: "AddStudentPage",
    path: "/add-student",
    component: AddStudent,
  },
  {
    name: "ProductsPage",
    path: "/products",
    component: Products,
  },
  {
    name: "CrudStudentsPage",
    path: "/crud-students",
    component: CrudStudents,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
