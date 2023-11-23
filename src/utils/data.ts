export const navBarItems = {
  left: [
    {
      title: "Support us",
      label: "Support us",
      path: "",
    },
    {
      title: "Contact",
      label: "Contact",
      path: "/contact-us",
    },
  ],
  center: [
    {
      title: "Sign In",
      label: "Sign In",
      path: "/auth/sign-in",
      theme: {
        item: "block text-md text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border hover:border-gray-200",
      },
    },
    {
      title: "Sign Up",
      label: "Sign Up",
      path: "/auth/sign-up",
      theme: {
        item: "mt-4 block bg-green-800 text-white dark:bg-green-100 dark:text-gray-800 text-md rounded px-4 py-2 rounded-md border border-transparent hover:border-gray-200 lg:ml-4 lg:mt-0",
      },
    },
  ],
  right: [
    {
      label: "",
      title: "go to git hub",
      path: "https://github.com/yalnguembu/quonte",
      icon: () => import("@/components/icons/GithubIcon.vue"),
    },
    {
      label: "",
      title: "go to twitter",
      path: "https://twitter.com/yalnguembu",
      icon:  () => import("@/components/icons/TwitterIcon.vue"),
    },
  ],
};
export const sideBarItems = [
  {
    title: "home",
    label: "Home",
    path: "/",
    icon: ()=> import("@/components/icons/HomeIcon.vue"),
  },
  {
    title: "notes",
    label: "Notes",
    path: "/notes",
    icon: ()=> import("@/components/icons/NoteIcon.vue"),
  },
  {
    title: "tags",
    label: "Tags",
    path: "/tags",
    icon: ()=> import("@/components/icons/TagIcon.vue"),
  },
];
export const footerItems = [
  [
    {
      title: "Product",
      label: "Product",
      path: "",
    },
    {
      title: "Solution",
      label: "Solution",
      path: "",
    },
    {
      title: "Sign In",
      label: "Sign In",
      path: "/auth/sign-in",
    },
  ],
  [
    {
      title: "About us",
      label: "About us",
      path: "/about-us",
    },
    {
      title: "Support us",
      label: "Support us",
      path: "",
    },
    {
      title: "Contact us",
      label: "Contact us",
      path: "contact-us",
    },
  ],
  [
    {
      label: "",
      title: "Github",
      path: "https://github.com/yalnguembu/quonte",
      icon: () => import("@/components/icons/GithubIcon.vue"),
    },
    {
      label: "",
      title: "Twitter",
      path: "https://twitter.com/yalnguembu",
      icon: () => import("@/components/icons/TwitterIcon.vue"),
    },
  ],
];
