<template>
  <div :class="theme.box">
    <div class="flex items-center">
      <InformationIcon :class="theme.icon" />
      <h3 :class="theme.title">
        {{
          alertType === ALERT_BOX_TYPE.ERROR
            ? "Error"
            : props.alertType === ALERT_BOX_TYPE.WARNING
            ? "Warning"
            : props.alertType === ALERT_BOX_TYPE.INFO
            ? "Information"
            : "Note"
        }}:
      </h3>
    </div>
    <p class="text-gray-500 dark:text-gray-400 p-2">
      {{ summary }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import InformationIcon from "./icons/InformationIcon.vue";
import { ALERT_BOX_TYPE } from "@/utils/enum";
import type { PropType } from "vue";

const props = defineProps({
  summary: {
    type: String,
    required: true,
  },
  alertType: {
    required: true,
    type: String as PropType<ALERT_BOX_TYPE>,
  },
});

const theme =
  props.alertType === ALERT_BOX_TYPE.ERROR
    ? {
        box: "bg-red-100 dark:bg-red-800/20 p-2 rounded-lg",
        icon: "dark:stroke-red-400 stroke-red-500 mr-2 align-middle",
        title: "underline font-bold text-lg text-red-500 dark:text-red-400",
      }
    : props.alertType === ALERT_BOX_TYPE.WARNING
    ? {
        box: "bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg",
        icon: "dark:stroke-orange-400 stroke-orange-500 mr-2 align-middle",
        title:
          "underline font-bold text-lg text-orange-500 dark:text-orange-400",
      }
    : props.alertType === ALERT_BOX_TYPE.INFO
    ? {
        box: "bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg",
        icon: "dark:stroke-blue-400 stroke-blue-500 mr-2 align-middle",
        title: "underline font-bold text-lg text-blue-500 dark:text-blue-400",
      }
    : props.alertType === ALERT_BOX_TYPE.SUCCESS
    ? {
        box: "bg-green-100 dark:bg-green-900/50 p-2 rounded-lg",
        icon: "dark:stroke-green-400 stroke-green-500 mr-2 align{theme}-middle",
        title: "underline font-bold text-lg text-green-500 dark:text-green-400",
      }
    : {
        box: "bg-gray-100 dark:bg-gray-900/50 p-2 rounded-lg",
        icon: "dark:stroke-$gray-400 stroke-gray-500 mr-2 align-middle",
        title: "underline font-bold text-lg text-gray-500 dark:text-gray-400",
      };
</script>
