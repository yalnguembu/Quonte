<template>
  <AnimeOnScroll>
    <div
      class="flex flex-col items-center w-full py-12 lg:py-20 lg:px-4"
      id="contact"
    >
      <h3
        class="font-bold text-3xl text-green-800 dark:text-green-100 text-center p-8 pb-4"
      >
        <span class="relative block">
          What's your Quonte idea?
          <img
            src="@/assets/images/Group 5601.svg"
            alt=""
            class="absolute w-12 -top-10 -right-3 lg:rotate-90 lg:-right-20"
          />
        </span>
      </h3>
      <h4 class="text-gray-500 text-xl">Let's chat and see how we can help</h4>
      <div
        class="w-full px-4 py-8 flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row md:justify-center"
      >
        <LinkWrapper
          isExternal
          path="https://t.me/yalnguembu"
          class="w-full px-6 py-1 hover:shadow-md hover:shadow-yellow-300 dark:hover:shadow-yellow-900 bg-yellow-500 hover:bg-yellow-400 dark:hover:bg-yellow-400 flex items-center rounded-xl md:justify-evenly md:w-auto"
        >
          <TelegramIcon class="fill-gray-500 h-10 w-10" />
          <span class="p-4 py-2 text-left">
            <span class="font-bold text-lg"> Telegram </span> <br />
            <span class="text-gray-600">@quonte_io </span>
          </span>
        </LinkWrapper>
        <LinkWrapper
          path="mailto:yalnguembu@gmail.com"
          isExternal
          class="w-full px-6 py-1 hover:shadow-md hover:shadow-green-700 bg-green-800 dark:bg-green-100 hover:bg-green-700 dark:hover:bg-green-300 flex items-center rounded-xl md:justify-evenly md:w-auto"
        >
          <span class="text-5xl text-white dark:text-green-800">@</span>
          <span class="p-4 py-2 text-left">
            <span class="font-bold text-lg text-white dark:text-green-800">
              Email
            </span>
            <br />
            <span class="text-gray-400 dark:text-gray-600">@quonte_io </span>
          </span>
        </LinkWrapper>
      </div>
    </div>
  </AnimeOnScroll>
</template>
<script lang="ts" setup>
import AnimeOnScroll from "@/components/AnimeOnScroll.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>
