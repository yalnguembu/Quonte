import { defineStore } from "pinia";
import { ref } from "vue";
interface Organisation {
  id: string;
  name: string;
  description: string;
  image: string;
}
export const useOrganisationStore = defineStore("organisation", () => {
  const organisations = ref<Organisation[]>([
    {
      id: "Nova-for-Software",
      name: "Nova for Software",
      description: "Collect user informations",
      image: "Les it au jourd'hui les etoiles de demain",
    },
    {
      id: "young-it",
      name: "Nova for Software",
      description: "Collect user informations",
      image: "Les it au jourd'hui les etoiles de demain",
    },
  ]);
  const create = (organisation: Organisation) =>
    organisations.value.push(organisation);

  const findById = (id: string) =>
    organisations.value.find((organisation) => organisation.id === id);

  return { organisations, create, findById };
});
