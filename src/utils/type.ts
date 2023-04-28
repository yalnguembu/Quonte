import type { VueElement } from "vue";

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export type MenuItem = {
  title?: string;
  label?: string;
  path: string;
  icon?: VueElement;
  theme?: {
    icon: "string";
    label: "string";
    item: "block text-md font-bold text-green-900 px-4 py-2 rounded-md border border-transparent hover:border-gray-200";
  };
};

export type Tag = {
  id: string;
  title: string;
  description?: string;
};
