import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { TASK_STATUS, TASK_CATEGORIES, TASK_PRIORITY } from "@/utils/enum";

interface Task {
  id: number;
  title: string;
  summary: string;
  status: TASK_STATUS;
  category: TASK_CATEGORIES;
  priority: TASK_PRIORITY;
  reporter: string;
  assignee: string;
  subTasks: Array<{
    id: number;
    title: string;
    summary: string;
    status: TASK_STATUS;
    reporter: string;
    assignee: string;
  }>;
}
export const useTaskStore = defineStore("task", () => {
  const tasks = ref([
    {
      id: 0,
      title: "Collect informations",
      summary: "Collect user informations",
      status: TASK_STATUS.DONE,
      category: TASK_CATEGORIES.STORY,
      priority: TASK_PRIORITY.MAJOR,
      reporter: "string",
      assignee: "Mazeking",
      subTasks: [],
    },
    {
      id: 1,
      title: "Informations Analysis",
      summary: "Summary test",
      status: TASK_STATUS.DONE,
      category: TASK_CATEGORIES.BUG,
      priority: TASK_PRIORITY.CRITICAL,
      reporter: "string",
      assignee: "Mazeking",
      subTasks: [],
    },
    {
      id: 2,
      title: "General conception",
      summary: "Summary test 3",
      status: TASK_STATUS.IN_PROGRESS,
      category: TASK_CATEGORIES.ENHANCEMENT,
      priority: TASK_PRIORITY.MINOR,
      reporter: "string",
      assignee: "Mazeking",
      subTasks: [],
    },
    {
      id: 3,
      title: "Detailed conception",
      summary:
        "Ecrire le cahier des charges du projets apres avoir entendu les parties",
      status: TASK_STATUS.TODO,
      category: TASK_CATEGORIES.EPIC,
      priority: TASK_PRIORITY.BLOCKER,
      reporter: "string",
      assignee: "",
      subTasks: [
        {
          id: 5,
          title: "Developpement",
          summary: "Summary test 3",
          status: TASK_STATUS.TODO,
          reporter: "string",
          assignee: "Mazeking",
        },
      ],
    },
    {
      id: 4,
      title: "Modelisation",
      summary: "Summary test 3",
      status: TASK_STATUS.TODO,
      category: TASK_CATEGORIES.TASK,
      priority: TASK_PRIORITY.CRITICAL,
      reporter: "string",
      assignee: "Mazeking",
      subTasks: [],
    },
    {
      id: 5,
      title: "Developpement",
      summary: "Summary test 3",
      status: TASK_STATUS.TODO,
      category: TASK_CATEGORIES.EPIC,
      priority: TASK_PRIORITY.MAJOR,
      reporter: "string",
      assignee: "Mazeking",
      subTasks: [],
    },
    {
      id: 6,
      title: "Deployement",
      summary: "Summary test 3",
      status: TASK_STATUS.TODO,
      category: TASK_CATEGORIES.TASK,
      priority: TASK_PRIORITY.TRIVIAL,
      reporter: "string",
      assignee: "Mazeking",
      subTasks: [],
    },
  ]);
  const numberOfTasks = computed<number>(() => tasks.value.length);
  const create = (task: Task) => {
    const newTask = {
      ...task,
      id: numberOfTasks.value,
      status: TASK_STATUS.TODO,
      subTasks: [],
    };
    tasks.value.push(newTask);
  };
  const createSubTask = (
    parentId: number,
    task: {
      id: number;
      title: string;
      summary: string;
      status: TASK_STATUS;
      reporter: string;
      assignee: string;
    }
  ) => {
    tasks.value[parentId].subTasks.push(task);
    tasks.value[0].subTasks;
  };
  const update = (id: number, playload: object) => {
    tasks.value[id] = { ...tasks.value[id], ...playload };
  };
  const remove = (id: number) => {
    tasks.value.splice(id, 1);
  };

  return { tasks, create, numberOfTasks, update, remove, createSubTask };
});
