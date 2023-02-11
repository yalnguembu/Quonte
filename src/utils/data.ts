import { TASK_STATUS, TASK_CATEGORIES, TASK_PRIORITY } from "./enum";
import TagIcon from "@/components/icons/TagIcon.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import TaskIcon from "@/components/icons/TaskIcon.vue";
import PieChartIcon from "@/components/icons/PieChartIcon.vue";
import UsersIcon from "@/components/icons/UsersIcon.vue";
import UserGroupIcon from "@/components/icons/UserGroupIcon.vue";
import FolderIconVue from "@/components/icons/FolderIcon.vue";
import SettingIconVue from "@/components/icons/SettingIcon.vue";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon.vue";
import ClipboardIcon from "@/components/icons/ClipboardIcon.vue";
import ArrowPathIcon from "@/components/icons/ArrowPathIcon.vue";
import ClipboardCopieIcon from "@/components/icons/ClipboardCopieIcon.vue";

export const tabBarItems = [
  {
    title: "Overview",
    path: "Overview",
    icon: HomeIcon,
  },
  {
    title: "Labels",
    path: "Labels",
    icon: TagIcon,
  },
  {
    title: "Tasks",
    path: "Tasks",
    icon: TaskIcon,
  },
  {
    title: "Members",
    path: "Members",
    icon: UserGroupIcon,
  },
  {
    title: "Statistics",
    path: "Statistics",
    icon: PieChartIcon,
  },
];

export const sideBarMenuItems = [
  {
    title: "Project",
    path: "projects",
    icon: FolderIconVue,
  },
  {
    title: "Users",
    path: "users",
    icon: UsersIcon,
  },
  {
    title: "Teams",
    path: "teams",
    icon: UserGroupIcon,
  },
  {
    title: "Setting",
    path: "setting",
    icon: SettingIconVue,
  },
];
export const tasks = [
  {
    id: 0,
    title: "Title test",
    summary: "Summary test",
    status: TASK_STATUS.TODO,
    categoriy: TASK_CATEGORIES.STORY,
    priority: TASK_PRIORITY.MAJOR,
    reporter: "string",
    assignee: "Mazeking",
    subTasks: [],
  },
];

export const keyProgrationIndicators = [
  {
    title: "All tasks",
    value: 27,
    icon: ClipboardIcon,
  },
  {
    title: "Todos tasks",
    value: 15,
    icon: ClipboardCopieIcon,
  },
  {
    title: "Inprogress tasks",
    value: 3,
    icon: ArrowPathIcon,
  },
  {
    title: "Dones tasks",
    value: 9,
    icon: CheckCircleIcon,
  },
];
