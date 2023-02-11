<template>
  <div class="w-full p-4 border rounded-lg">
    <div>
      <h1 class="text-2xl font-bold">Taux d'avancement</h1>
      <div class="mt-5 flex flex-row">
        <svg ref="svg" id="pie-chart" width="300" height="300"></svg>
        <ul ref="list" id="pie-values"></ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const svg = ref<SVGElement>();

var data = [
  {
    name: "Value 1",
    color: "red",
    value: 180,
  },
  {
    name: "Value 2",
    color: "rebeccapurple",
    value: 100,
  },
  {
    name: "Value 3",
    color: "green",
    value: 135,
  },
  {
    name: "Value 4",
    color: "pink",
    value: 230,
  },
  {
    name: "Value 5",
    color: "blue",
    value: 90,
  },
];

var totalValue = 0,
  radius = 100,
  circleLength = Math.PI * (radius * 2),
  spaceLeft = circleLength;

// Get total value of all data.
for (var i = 0; i < data.length; i++) {
  totalValue += data[i].value;
}

// Loop trough data to create pie
for (var c = 0; c < data.length; c++) {
  // Create circle
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  // Set attributes (self explanatory)
  circle.setAttribute("class", "pie-chart-value");
  circle.setAttribute("cx", "150");
  circle.setAttribute("cy", "150");
  circle.setAttribute("r", `${radius}`);

  circle.style.strokeDasharray = spaceLeft + " " + circleLength;

  circle.style.stroke = data[c].color;

  // Subtract current value from spaceLeft
  spaceLeft -= (data[c].value / totalValue) * circleLength;
}
</script>
<style scoped>
.pie-chart-value {
  fill: none;
  stroke-width: 50;
}
</style>
