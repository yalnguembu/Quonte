<template>
  <div
      class="w-full flex px-2 py-4 justify-between"
  >
    <section
        class="flex justify-center items-center"
    >
      <div
          class="w-4/5 mx-auto flex justify-center items-center relative lg:w-full"
      >
        <img
          src="/logo.svg"
          class="w-full -rotate-45 opacity-60 blur-xl dark:blur-2xl border"
           :alt="alt"
        />
          <div class="w-full flex justify-center items-center absolute">
            <img
              src="/logo.svg"
              class="drop-shadow-3xl w-4/5 rotate-45"
              :alt="alt"
            />
            </div>
      </div>
    </section>
    <section
        class="w-3/4"
    >
      <div class="border">
        <h3 class="text-lg font-bold text-green-800 dark:text-green-200 mt-4"> {{ headline }} </h3>
        <h2
            class="text-5xl font-bold text-gray-900 dark:text-green-200 bord lg:text-7xl xl:mb-8 text-pretty"
        >
          {{ title }}
        </h2>
        <div>
          <p
              class="text-lg text-gray-800 dark:text-gray-300 mt-4 lg:text-xl xl:mb-12"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  headline: string,
  title: string,
  description: string,
  alt: string,
}>()
</script>
