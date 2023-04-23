import { createRouter, createWebHistory } from "vue-router";
import LandingPageVue from "@/views/LandingPage.vue";
import MainWrapperVue from "@/components/MainWrapper.vue";

export const routes = [
  {
    path: "/",
    component: MainWrapperVue,
    children: [
      {
        name: "landing_page",
        path: "",
        component: LandingPageVue,
      },
      {
        name: "authentication",
        path: "/auth",
        meta: {
          isPublic: true,
        },
        children: [
          {
            name: "signin",
            path: "sign-in",
            component: () => import("@/views/auth/SignIn.vue"),
          },
          {
            name: "signup",
            path: "sign-up",
            component: () => import("@/views/auth/SignUp.vue"),
          },
        ],
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
      },
    ],
  },
  {
    name: "app",
    path: "/app",
    meta: {
      isPublic: false,
    },
    children: [
      {
        name: "notes",
        path: "notes",
        component: () => import("@/views/auth/SignIn.vue"),
      },
      {
        name: "todos",
        path: "todos",
        component: () => import("@/views/auth/SignUp.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
