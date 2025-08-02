import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import ContactUs from "@/views/ContactUs.vue";
import Slot from "@/views/SlotPage.vue";
import AddStudent from "@/views/AddStudentPage.vue";
import Products from "@/views/ProductsPage.vue";
import CrudStudents from "@/views/CrudStudentsPage.vue";
import CustomDirective from "@/views/CustomDirectivePage.vue";
import stMixin from "@/views/MixinPage.vue";
import DynamicParamPage from "@/views/DynamicParamPage.vue";
import MyLearnnig from "@/views/NestedLearning.vue";
import MyWishlist from "@/views/NestedWishList.vue";
import NestedRoutes from "@/views/NestedRoutes.vue";
import NotFound from "@/views/NotFoundPage.vue";
import Watchers from "@/views/WatchPage.vue";
import ProvideInject from "@/views/ProvideInjectPage.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: Home,
    meta: {
      title: "Home",
      isActive: true,
    },
  },
  {
    name: "AboutPage",
    path: "/about",
    component: About,
    meta: {
      title: "About",
      isActive: true,
    },
  },
  {
    name: "ContactPage",
    path: "/contact",
    component: ContactUs,
    meta: {
      title: "Contact",
      isActive: true,
    },
  },
  {
    name: "SlotPage",
    path: "/slot",
    component: Slot,
    meta: {
      title: "Slot",
      isActive: false,
    },
  },
  {
    name: "AddStudentPage",
    path: "/add-student",
    component: AddStudent,
    meta: {
      title: "AddStudents",
      isActive: false,
    },
  },
  {
    name: "ProductsPage",
    path: "/products",
    component: Products,
    meta: {
      title: "Products",
      isActive: true,
    },
  },
  {
    name: "CrudStudentsPage",
    path: "/crud-students",
    component: CrudStudents,
    meta: {
      title: "Students",
      isActive: true,
    },
  },
  {
    name: "CustomDirectivePage",
    path: "/custom-directive",
    component: CustomDirective,
    meta: {
      title: "CustomDirective",
      isActive: false,
    },
  },
  {
    name: "MixinPage",
    path: "/mixin",
    component: stMixin,
    meta: {
      title: "MixinDemo",
      isActive: true,
    },
  },
  {
    name: "dynamic",
    path: "/dynamic/:userid/:username",
    component: DynamicParamPage,
    meta: {
      title: "Dynamic",
      isActive: true,
    },
  },
  {
    name: "NestedRoutesPage",
    path: "/nested",
    component: NestedRoutes,
    meta: {
      title: "Nested Routes",
      isActive: true,
    },
    children: [
      {
        name: "learning",
        path: "my-learning",
        component: MyLearnnig,
        meta: {
          title: "My Learning",
          isActive: true,
        },
      },
      {
        name: "wishlist",
        path: "whislist",
        component: MyWishlist,
        meta: {
          title: "Wishlist",
          isActive: true,
        },
      },
    ],
  },
  {
    name: "watch",
    path: "/watch",
    component: Watchers,
    meta: {
      title: "Watcher",
      isActive: true,
    },
  },
  {
    name: "ProvideInj",
    path: "/provide",
    component: ProvideInject,
    meta: {
      title: "ProvideInj",
      isActive: true,
    },
  },
  {
    name: "not_found",
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: {
      title: "Not Found",
      isActive: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(), //createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
