<template>
  <div class="overflow-y-auto">
    <div class="flex">
      <h1 class="text-xl font-bold">Statistics</h1>
      <div>
        <button>bar</button>
      </div>
    </div>
    <section class="w-full mt-4">
      <div>
        <svg class="border w-full h-96 p-4">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="400"
            style="stroke: gray; stroke-width: 4"
          />
          <line
            x1="0"
            y1="350"
            x2="850"
            y2="350"
            style="stroke: gray; stroke-width: 4"
          />
          <polyline
            points="0,350 0,0 200,250 400,120 600,140 800,180 850,350"
            style="fill: dodgerblue; stroke: black; stroke-width: 3"
          />
        </svg>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts"></script>
