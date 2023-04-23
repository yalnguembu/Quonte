import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import NoteIcon from "@/components/icons/NoteIcon.vue";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon.vue";
import TagIcon from "@/components/icons/TagIcon.vue";

export const navBarItems = {
  private: [
    {
      title: "notes",
      label: "Notes",
      path: "/",
      icon: NoteIcon,
      theme: {
        icon: "w-5 h-5 mr-3 align-middle dark:stroke-gray-300",
        item: "block text-md font-bold text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200",
      },
    },
    {
      title: "todos",
      label: "Todos",
      path: "/todos",
      icon: CheckCircleIcon,
      theme: {
        icon: "w-5 h-5 mr-3 align-middle dark:stroke-gray-300",
        item: "block text-md font-bold text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200",
      },
    },
    {
      title: "tags",
      label: "Tags",
      path: "/tags",
      icon: TagIcon,
      theme: {
        icon: "w-5 h-5 mr-3 align-middle dark:stroke-gray-300",
        item: "block text-md font-bold text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200",
      },
    },
  ],
  left: [
    {
      title: "About us",
      label: "About us",
      path: "about-us",
    },
    {
      title: "Support us",
      label: "Support us",
      path: "support-us",
    },
    {
      title: "Contact",
      label: "Contact",
      path: "contact",
    },
  ],
  center: [
    {
      title: "Sign In",
      label: "Sign In",
      path: "/auth/sign-in",
      theme: {
        item: "block text-md font-bold text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200",
      },
    },
    {
      title: "Sign Up",
      label: "Sign Up",
      path: "/auth/sign-up",
      theme: {
        item: "ml-4 block bg-green-900 text-white dark:bg-green-100 dark:text-gray-800 text-md rounded font-bold px-4 py-2 rounded-md border border-transparent hover:border-gray-200",
      },
    },
  ],
  right: [
    {
      title: "Support us",
      path: "https://github.com/yalnguembu/quonte",
      icon: GithubIcon,
      theme: {
        icon: "w-5 h-5 dark:fill-gray-100",
        item: "block rounded p-2 rounded-md border border-transparent hover:border-gray-300 dark:hover:border-gray-700",
      },
    },
    {
      title: "twitter",
      path: "https://twitter.com/yalnguembu",
      icon: TwitterIcon,
      theme: {
        icon: "w-5 h-5 dark:fill-gray-100",
        item: "block rounded p-2 rounded-md border border-transparent hover:border-gray-300 dark:hover:border-gray-700",
      },
    },
  ],
};
