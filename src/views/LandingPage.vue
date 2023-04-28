<template>
  <div class="bg-white dark:bg-gray-900 w-full">
    <div class="h-max w-full">
      <header class="h-full w-full p-4 grid gap-4 grid-cols-1 lg:grid-cols-2">
        <div class="h-ful p-4 py-6 lg:p-12 lg:py-16">
          <h1
            class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500"
          >
            Quonte
          </h1>
          <h2
            class="text-7xl font-bold text-green-900 dark:text-green-200 mt-4"
          >
            Take note of useful tips
          </h2>
          <p class="text-xl text-gray-800 dark:text-gray-300 mt-4">
            Not sure if you remember something? Write it down here!
          </p>
          <div class="my-6 grid lg:block">
            <BaseButton
              title="Get started"
              theme="w-full px-8 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
            />
            <a
              target="_blank"
              href="https://twitter.com/yalnguembu"
              class="w-full px-8 py-2 mt-4 rounded border dark:border-green-300 bg-transparent text-green-900 dark:text-green-200 text-center text-lg hover:text:green-800 hover:bg-gray-800 dark:hover:border-transparent lg:ml-4 lg:mt-0 lg:w-fit"
            >
              <TwitterIconVue
                class="align-middle mr-3 w-5 h-5 dark:fill-green-200"
              />
              Follow us
            </a>
          </div>
        </div>
        <div class="h-full p-8 justify-center items-center flex">
          <div
            class="rounded-full w-96 h-96 block flex justify-center items-center"
          >
            <img
              src="@/assets/images/note-icon.svg"
              class="w-full drop-shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
    <main class="max-w-screen-lg mx-auto">
      <div class="grid gap-x-8 lg:grid-cols-2">
        <div class="h-full flex items-center justify-center">
          <img
            src="@/assets/images/not-board.svg"
            class="w-1/2 lg:w-full"
            alt=""
          />
        </div>
        <div class="p-12">
          <h3 class="font-bold text-3xl dark:text-green-100">
            Let'us try something amazing
          </h3>
          <p class="text-gray-500 dark:text-gray-300 text-lg my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sequi consequatur cumque nisi. Officia deserunt quibusdam aspernatur
            corporis. Repudiandae sunt ab nesciunt eum, tenetur repellat iste
            provident mollitia nulla consequatur.
          </p>
          <BaseButton title="Create note" />
        </div>
      </div>
      <div class="block py-8">
        <h3
          class="font-bold text-3xl text-green-800 dark:text-green-100 text-center my-24"
        >
          Those who give us power
        </h3>
        <div class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-4">
          <div class="p-4 flex items-center justify-center">
            <img
              src="@/assets/images/Vue.js_Logo.svg"
              class="w-1/2 grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div class="p-4 flex items-center justify-center">
            <img
              src="@/assets/images/Tailwind_CSS_Logo.svg"
              class="w-1/2 grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div class="p-4 flex items-center justify-center">
            <img
              src="@/assets/images/Unofficial_JavaScript_logo.svg"
              class="w-1/2 grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div class="p-4 flex items-center justify-center">
            <img
              src="@/assets/images/vite_logo.svg"
              class="w-1/2 grayscale hover:grayscale-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import BaseButton from "@/components/BaseButton.vue";
import TwitterIconVue from "@/components/icons/TwitterIcon.vue";
</script>
