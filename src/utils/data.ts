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
      path: "/notes",
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
      title: "go to git hub",
      path: "https://github.com/yalnguembu/quonte",
      icon: GithubIcon,
      theme: {
        icon: "w-5 h-5 dark:fill-gray-100",
        item: "block rounded p-2 rounded-md border border-transparent hover:border-gray-300 dark:hover:border-gray-700",
      },
    },
    {
      title: "go to twitter",
      path: "https://twitter.com/yalnguembu",
      icon: TwitterIcon,
      theme: {
        icon: "w-5 h-5 dark:fill-gray-100",
        item: "block rounded p-2 rounded-md border border-transparent hover:border-gray-300 dark:hover:border-gray-700",
      },
    },
  ],
};

export const notes = [
  {
    id: "dcba-4321-5678-abcd",
    title: "Always reproduce bug in local",
    creationDate: new Date("2023-04-24").toISOString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet praesentium eos dolor vitae repudiandae consectetur rem nesciunt libero odio aspernatur at, aliquid reprehenderit voluptates placeat id ea, officia facere expedita., aliquid reprehenderit voluptates placeat id ea, officia facere expedita. , aliquid reprehenderit voluptates placeat id ea, officia facere expedita. OYEAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    tags: [
      {
        id: "1234-4321-5678-abcd",
        title:
          "e2e tests wrejrg 3oergfg wjerpgf 23regjop weorjigfoirewrorepwofgoj",
      },
      {
        id: "1234-4321-5678-abcd",
        title: "cypress",
      },
      {
        id: "1234-4321-5678-abcd",
        title: "testing",
      },
      {
        id: "1234-4321-5678-abcd",
        title: "typescript",
      },
    ],
  },
  {
    id: "dcba-4521-5678-abcd",
    title: "Always reproduce bug in local",
    creationDate: new Date("2023-04-04").toISOString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet praesentium eos dolor vitae repudiandae consectetur rem nesciunt libero odio aspernatur at, aliquid ",
    tags: [
      {
        id: "1234-4321-5678-abcd",
        title: "cypress",
      },
      {
        id: "1234-4321-5678-abcd",
        title: "testing",
      },
    ],
  },
  {
    id: "dcba-a321-5678-abcd",
    title: "Always reproduce bug in local Always reproduce bug in local",
    creationDate: new Date("2023-02-17").toISOString(),
    description: "",
    tags: [],
  },
  {
    id: "dcba-4f21-5678-abcd",
    title: "Always reproduce bug in local",
    creationDate: new Date("2023-01-09").toISOString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet praesentium eos dolor vitae repudiandae consectetur rem nesciunt libero odio aspernatur at, aliquid reprehenderit voluptates placeat id ea, officia facere expedita.",
    tags: [
      {
        id: "1234-4321-5678-abcd",
        title: "e2e tests",
      },
      {
        id: "1234-4321-5678-abcd",
        title: "cypress",
      },
      {
        id: "1234-4321-5678-abcd",
        title: "testing",
      },
    ],
  },
];
