<template>
  <section
    class="bg-white dark:bg-gray-900 p-6 w-full border-b border-t dark:border-gray-700 lg:border-none lg:shadow-lg lg:rounded"
  >
    <div class="flex flex-col items-center lg:flex-row">
      <img
        :src="me"
        class="rounded-full h-32 w-32 bg-gray-100 dark:bg-gray-800"
        :alt="`an image of ${username} profile picture`"
      />
      <div
        class="flex flex-col mt-4 text-center lg:ml-8 lg:self-end lg:text-left"
      >
        <span
          class="font-bold dark:text-gray-100 text-xl w-full text-ellipsis whitespace-pre-all overflow-hidden break-word"
        >
          {{ username }}
        </span>
        <span
          class="text-gray-500 mt-2 w-full text-ellipsis whitespace-pre-all overflow-hidden break-word"
        >
          {{ email }}
        </span>
      </div>
    </div>
    <div class="mt-4">
      <DetailsLine>
        <RouterLink
          @click="$emit('close')"
          :to="`@${username}`"
          class="font-medium dark:text-gray-100 text-lg w-full px-3 block"
        >
          Profile
        </RouterLink>
      </DetailsLine>
      <DetailsLine>
        <span class="font-medium dark:text-gray-100 text-lg w-full px-3">
          Setting
        </span>
      </DetailsLine>
      <DetailsLine class="border-none py-2">
        <ButtonWrapper class="w-full text-left" @click="$emit('signOut')">
          <span class="font-medium dark:text-gray-100 text-lg">
            <LogoutIcon class="mr-2" />Sign Out
          </span>
        </ButtonWrapper>
      </DetailsLine>
    </div>
  </section>
</template>

<script setup lang="ts">
import DetailsLine from "@/components/DetailsLine.vue";
import LogoutIcon from "@/components/icons/LogoutIcon.vue";
import ButtonWrapper from "@/components/button/ButtonWrapper.vue";
import me from "@/assets/user-default.png";

defineEmits<{
  (event: "signOut"): void;
  (event: "close"): void;
}>();

defineProps({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
});
</script>
