<template>
  <div class="overflow-y-auto pt-4 z-0">
    <section class="grid grid-cols-1 gap-10 lg:grid-cols-4 text-gray-700">
      <KeyPerformanceIndicatorCard
        v-for="(keyProgrationIndicator, index) in keyProgrationIndicators"
        :key="index"
        :title="keyProgrationIndicator.title"
        :value="keyProgrationIndicator.value"
        :icon="keyProgrationIndicator.icon"
      >
      </KeyPerformanceIndicatorCard>
    </section>
    <div class="w-full mt-8 bg-white">
      <ProjectStatistics />
    </div>
  </div>
</template>
<script setup lang="ts">
import KeyPerformanceIndicatorCard from "@/components/projects/KeyPerformanceIndicatorCard.vue";
import { keyProgrationIndicators } from "@/utils/data";
import ProjectStatistics from "@/components/projects/ProjectStatistics.vue";
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
