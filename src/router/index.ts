import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
export const routes = [
  {
    path: "/",
    name: "main",
    component: HomeView,
  },
  {
    path: "/organisation",
    children: [
      {
        path: "",
        name: "organisation",
        component: () => import("../views/OrganisationsView.vue"),
      },
      {
        path: "/organisation/new",
        name: "projectNew",
        component: () => import("../views/ProjectCreationView.vue"),
      },
    ],
  },
  {
    path: "/:organisationId",
    children: [
      {
        path: "",
        name: "organisationDetail",
        component: () => import("../views/OrganisationDetailsView.vue"),
      },
      {
        path: "project",
        children: [
          {
            path: "",
            name: "project",
            component: () => import("../views/ProjectView.vue"),
          },
          {
            path: "new",
            name: "newProject",
            component: () => import("../views/ProjectCreationView.vue"),
          },
          {
            path: ":id",
            name: "projectDetails",
            component: () => import("../views/ProjectDetailsView.vue"),
            children: [
              {
                path: "",
                name: "tabOverview",
                component: () => import("../components/ProjectTabOverview.vue"),
              },
              {
                path: "labels",
                name: "tabLabels",
                component: () => import("../components/ProjectTabLabels.vue"),
              },
              {
                path: "tasks",
                name: "tabTasks",
                component: () => import("../components/ProjectTabTasks.vue"),
              },
              {
                path: "statistics",
                name: "tabStatistics",
                component: () =>
                  import("../components/ProjectTabStatistics.vue"),
              },
              {
                path: "members",
                name: "tabMembers",
                component: () => import("../components/ProjectTabMembers.vue"),
              },
            ],
          },
        ],
      },
      {
        path: "group",
        children: [
          {
            path: "",
            name: "groups",
            component: () => import("../views/GroupsView.vue"),
          },
          {
            path: "new",
            name: "groupNew",
            component: () => import("../views/ProjectCreationView.vue"),
          },
          {
            path: ":id",
            name: "groupDetails",
            component: () => import("../views/GroupDetailsView.vue"),
          },
        ],
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
