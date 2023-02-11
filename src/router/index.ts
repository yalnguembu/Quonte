import { createRouter, createWebHistory } from "vue-router";
import MainWrapper from "@/components/MainWrapper.vue";
import HomeView from "@/views/HomeView.vue";

export const routes = [
  {
    path: "/",
    component: MainWrapper,
    children: [
      {
        name: "home",
        path: "",
        component: HomeView,
      },
      {
        name: "organisation",
        path: "organisations/:organisationId",
        component: () => import("@/views/organisations/OrganisationView.vue"),
        children: [
          {
            name: "projects",
            path: "",
            component: () =>
              import("@/views/organisations/projects/ProjectsView.vue"),
          },
          {
            name: "project",
            path: "projects/:projectId",
            component: () =>
              import("@/views/organisations/projects/ProjectView.vue"),
          },
          {
            name: "users",
            path: "users",
            component: () =>
              import("@/views/organisations/users/UsersView.vue"),
          },
          {
            name: "teams",
            path: "teams",
            component: () =>
              import("@/views/organisations/teams/TeamsView.vue"),
          },
          {
            name: "team",
            path: "teams/:teamId",
            component: () => import("@/views/organisations/teams/TeamView.vue"),
          },
          {
            name: "setting",
            path: "setting",
            component: () =>
              import("@/views/organisations/teams/TeamsView.vue"),
          },
        ],
      },
      {
        name: "user-setting",
        path: "setting",
        component: HomeView,
      },
      {
        name: "profile",
        path: "profile",
        component: HomeView,
      },
      {
        path: "organisations",
        component: () => import("@/views/organisations/OrganisationsView.vue"),
      },
      {
        path: "logout",
        component: () => import("@/views/organisations/OrganisationsView.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
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
