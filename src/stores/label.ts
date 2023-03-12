import { defineStore } from "pinia";
import { ref } from "vue";
import { COLORS } from "@/utils/enum";
import { useTaskStore } from "./task";

interface Label {
  id: number;
  title: string;
  description: string;
  color: COLORS;
  tasks: [0];
}

export const useLabelStore = defineStore("label", () => {
  const taskStore = useTaskStore();
  const labels = ref([
    {
      id: 0,
      title: "Analyse anConception",
      description:
        "Collect user informations Ecrire le cahier des charges du projets apres avoir entendu les parties",
      color: COLORS.BLUE,
      tasks: [0],
    },
    {
      id: 1,
      title: "UI/UX DESIGN",
      description:
        "Collect user informations Ecrire le cahier des charges du projets apres avoir entendu les parties",
      color: COLORS.PINK,
      tasks: [0, 2, 5, 3],
    },
    {
      id: 2,
      title: "UI/UX DESIGN",
      description:
        "Collect user informations Ecrire le cahier des charges du projets apres avoir entendu les parties",
      color: COLORS.GREEN,
      tasks: [3, 2],
    },
    {
      id: 3,
      title: "UI/UX DESIGN",
      description:
        "Collect user informations Ecrire le cahier des charges du projets apres avoir entendu les parties",
      color: COLORS.BROWN,
      tasks: [4, 0],
    },
  ]);
  const create = (label: Label) => labels.value.push(label);

  const findById = (id: number) =>
    labels.value.find((label) => label.id === id);

  const getTaskByLabel = (id: number) => {
    const tasks = labels.value[id].tasks;
    return taskStore.tasks.filter((task) =>
      tasks.includes(taskStore.tasks.indexOf(task))
    );
  };

  return { labels, create, findById, getTaskByLabel };
});
