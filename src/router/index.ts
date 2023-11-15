import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "@/components/TheLayout.vue";
import PageWrapper from "@/components/PageWrapper.vue";

export const routes = [
  {
    path: "/",
    component: TheLayout,
    children: [
      {
        name: "home",
        path: "",
        component: PageWrapper,
        meta: {
          isPublic: true,
        },
      },
      {
        name: "contact",
        path: "contact-us",
        component: () => import("@/views/ContactUs.vue"),
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
      {
        name: "details",
        path: "@:username",
        component: () => import("@/views/UserProfile.vue"),
        meta: {
          isPublic: true,
        },
      },
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
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
