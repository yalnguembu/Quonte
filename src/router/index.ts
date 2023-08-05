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
        name: "note-details",
        path: "notes/:id",
        component: () => import("@/views/notes/NotesList.vue"),
        meta: {
          isPublic: false,
        },
      },
      {
        name: "notes",
        path: "notes",
        component: () => import("@/views/notes/NotesList.vue"),
        meta: {
          isPublic: false,
        },
      },
      // {
      //   name: "tag-details",
      //   path: "tags",
      //   component: () => import("@/views/tag/TagDetails.vue"),
      //   meta: {
      //     isPublic: false,
      //   },
      // },
      {
        name: "tags",
        path: "tags",
        component: () => import("@/views/tag/TagsList.vue"),
        meta: {
          isPublic: false,
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
