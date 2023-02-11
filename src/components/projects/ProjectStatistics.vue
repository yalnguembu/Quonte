<template>
  <div class="w-full border p-4 rounded-lg shadow">
    <h1 class="text-xl">Evolution</h1>
    <div class="flex flex-row">
      <div class="w-1/2 flex justify-center mt-4 pt-4">
        <svg class="donut" width="300" height="100%" viewBox="0 0 42 42">
          <circle cx="21" cy="21" r="15.91549430918954" fill="#fff" />
          <circle
            ref="todos"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="rgb(249 115 22)"
            stroke-width="5"
            stroke-dasharray="0 100"
            stroke-dashoffset="25"
          />
          <circle
            ref="inProgress"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="rgb(250 204 21)"
            stroke-width="5"
            stroke-dasharray="0 100"
            stroke-dashoffset="25"
          />
          <circle
            ref="dones"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="rgb(34 197 94)"
            stroke-width="5"
            stroke-dasharray="0 100"
            stroke-dashoffset="25"
          />
          <g class="chart-text">
            <text x="50%" y="50%" class="chart-number">{{ percentage }} %</text>
            <text x="50%" y="50%" class="chart-label">Evolution</text>
          </g>
        </svg>
      </div>
      <div class="w-1/2 flex flex-col justify-center p-4 md:p-8">
        <div class="flex items-center">
          <div class="w-4 h-4 rounded bg-orange-500 mr-3"></div>
          <p class="text-xl">Todos</p>
        </div>
        <div class="flex items-center mt-4">
          <div class="w-4 h-4 rounded bg-yellow-500 mr-3"></div>
          <p class="text-xl">In progress</p>
        </div>
        <div class="flex items-center mt-4">
          <div class="w-4 h-4 rounded bg-green-500 mr-3"></div>
          <p class="text-xl">Done</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const tasks = {
  todos: 14,
  inProgress: 8,
  dones: 2,
};

const todos = ref<SVGCircleElement | null>(null);
const inProgress = ref<SVGCircleElement | null>(null);
const dones = ref<SVGCircleElement | null>(null);
const total = ref<number>();
const percentage = ref<string>();

function calculate() {
  total.value = tasks.todos + tasks.inProgress + tasks.dones;

  var todosPercent = (tasks.todos / total.value) * 100;
  var inProgressPercent = (tasks.inProgress / total.value) * 100;
  var donesPercent = (tasks.dones / total.value) * 100;
  var offset = 25;
  percentage.value = ((tasks.dones / total.value) * 100)
    .toString()
    .substring(0, 4);

  todos.value
    ? ((todos.value.style.transition =
        "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out"),
      (todos.value.style.strokeDasharray =
        todosPercent + " " + (100 - todosPercent)),
      (todos.value.style.strokeDashoffset = `${offset}`))
    : "";

  inProgress.value
    ? ((inProgress.value.style.transition =
        "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out"),
      (inProgress.value.style.strokeDasharray =
        inProgressPercent + " " + (100 - inProgressPercent)),
      (inProgress.value.style.strokeDashoffset = `${
        100 - todosPercent + offset
      }`))
    : "";

  dones.value
    ? ((dones.value.style.transition =
        "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out"),
      (dones.value.style.strokeDasharray = (donesPercent +
        " " +
        (100 - donesPercent)) as string),
      (dones.value.style.strokeDashoffset = `${
        100 - (todosPercent + inProgressPercent) + offset
      }`))
    : "";
}

onMounted(calculate);
</script>
<style scoped>
.chart-text {
  fill: #222;
  transform: translateY(0.25em);
}

.chart-number {
  font-size: 0.5em;
  line-height: 1;
  text-anchor: middle;
  transform: translateY(-0.25em);
}

.chart-label {
  font-size: 0.2em;
  text-transform: uppercase;
  text-anchor: middle;
  transform: translateY(0.7em);
}
</style>
