import { createRouter, createWebHistory } from "vue-router";
import MainWrapper from "@/components/MainWrapper.vue";
import PageLayout from "@/components/PageLayout.vue";

export const routes = [
  {
    path: "/",
    component: MainWrapper,
    children: [
      {
        name: "home",
        path: "",
        component: PageLayout,
        meta: {
          isPublic: true,
        },
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
        name: "noteDetails",
        path: "note/:id",
        component: () => import("@/views/notes/NoteDetails.vue"),
        meta: {
          isPublic: true,
        },
      },
      {
        name: "notes",
        path: "notes",
        component: () => import("@/views/notes/NotesList.vue"),
        meta: {
          isPublic: true,
        },
      },
      {
        name: "tags",
        path: "tags",
        component: () => import("@/views/TagsList.vue"),
        meta: {
          isPublic: true,
        },
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
        meta: {
          isPublic: true,
        },
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
