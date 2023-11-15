<template>
  <div
    data-test="user-profile"
    @click.self="() => {}"
    class="relative justify-self-end w-full h-screen p-8 bg-white dark:bg-gray-900 dark:text-gray-100 overflow-y-auto"
  >
    <section class="flex justify-center w-full">
      <EditProfile v-if="shouldEdit" v-bind="userDetails" />
      <UserDetailsSkeleton v-else-if="isUserDetailsLoading" />
      <div v-else>
        <div>
          <div class="flex flex-col items-center lg:flex-row">
            <img
              :src="me"
              class="rounded-full h-40 w-40 my-8 bg-gray-100 dark:bg-gray-800"
              :alt="`${userDetails?.username} profile picture`"
            />
            <div
              class="flex flex-col mb-3 text-center lg:text-left lg:ml-8 lg:self-end"
            >
              <BaseButton
                v-if="isMyProfile"
                title="Edit profile"
                theme="py-1.5 px-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:text-green-700 dark:hover:text-green-300"
              >
                <template #icon-left>
                  <PincelSquareIcon class="inline mr-2 mb-[0.2rem]" />
                </template>
              </BaseButton>
              <BaseButton
                v-else
                title="Message"
                theme="py-1.5 px-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:text-green-700 dark:hover:text-green-300"
              >
                <template #icon-left>
                  <ChatIcon class="inline mr-2 mb-[0.2rem]" />
                </template>
              </BaseButton>
              <h4
                class="font-bold dark:text-gray-100 text-2xl mt-2 w-full text-ellipsis whitespace-pre-all overflow-hidden break-word"
              >
                {{ userDetails.username }}
              </h4>
              <h4
                class="text-gray-500 text-lg mt-1 w-full text-ellipsis whitespace-pre-all overflow-hidden break-word"
              >
                {{ userDetails.email }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-4">
      <div class="sticky top-0 left-0">
        <TabBar :items="tabBarItems" :active-tab="activeTab" />
      </div>
      <div v-if="activeTab === 0">
        <NoteGrid :notes="publicNotes" :isLoading="isNotesLoading" />
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { computed, onBeforeMount, ref, shallowRef } from "vue";
import BaseButton from "@/components/button/BaseButton.vue";
import PincelSquareIcon from "@/components/icons/PincelSquareIcon.vue";
import ChatIcon from "@/components/icons/MailIcon.vue";
import UserDetailsSkeleton from "@/components/skeleton/UserDetailsSkeleton.vue";
import { useSessionStore } from "@/stores/session";
import me from "@/assets/user-default.png";
import EditProfile from "@/components/EditProfile.vue";
import TabBar from "@/components/menu/TabBar.vue";
import { tabBarItems } from "@/utils/menu";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { User, newNullUser } from "@/domain/User";
import type { Note } from "@/domain/Note";
import { useNoteStore } from "@/stores/note";
import NoteGrid from "@/components/NoteGrid.vue";

const userDetails = ref<User>(newNullUser());
const isUserDetailsLoading = shallowRef<boolean>(false);
const shouldEdit = ref<boolean>(false);
const providedUsername: string = useRoute().params?.username as string;

const connectedUser = useSessionStore().session;
const isMyProfile = computed(
  (): boolean => connectedUser.username === providedUsername
);

const activeTab = ref<number>(0);

const fetchDetails = async (): Promise<void> => {
  if (isMyProfile.value) {
    userDetails.value = JSON.parse(
      JSON.stringify({
        email: connectedUser.email,
        username: connectedUser.username,
        picture: connectedUser.picture,
      })
    );
    return;
  }
  try {
    isUserDetailsLoading.value = true;
    userDetails.value = useUserStore().fetchUserByUsername(providedUsername);
  } catch (error: unknown) {
    console.log(error);
  } finally {
    isUserDetailsLoading.value = false;
  }
};

const publicNotes = ref<Note[]>([]);
const isNotesLoading = ref<boolean>(false);

const fetchNotes = async (): Promise<void> => {
  isNotesLoading.value = true;
  try {
    publicNotes.value = await useNoteStore().getNotesByUserId(
      userDetails.value.id
    );
  } catch (error: unknown) {
    console.error(error);
  } finally {
    isNotesLoading.value = false;
  }
};

onBeforeMount(async () => {
  await fetchDetails();
  await fetchNotes();
});
</script>
