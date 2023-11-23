<template>
  <div id="tag-list">
    <TagDetails
      v-if="tagToShowDetailsId"
      @close="
        () => {
          router.push({ name: 'tags' });
        }
      "
      :id="tagToShowDetailsId"
    />
    <TagCreationModal
      data-test="tag-creation-modal"
      @created="fetchTags"
      v-if="istTagCreationMoalVisible"
      @close="toggleIstTagCreationMoalVisible"
    />
    <div>
      <div class="p-4">
        <TheHeader data-test="list-header" title="Tags" />
      </div>
      <div class="min-h-screen flex justify-center bg-white dark:bg-gray-900">
        <div class="w-full max-w-screen-xl p-4 h-full block">
          <div v-if="istTagsListLoading" class="min-h-[90vh]">
            <div class="tag-container gap-4">
              <TagItemskeleton
                class="mb-6 rounded-lg"
                v-for="skeleton in 5"
                :key="skeleton"
              />
            </div>
          </div>
          <div v-else-if="tagsList.length">
            <div class="tag-container gap-4 py-4 min-h-28">
              <div v-for="(tag, index) in tagsList" :key="index" class="figure">
                <TagListItem
                  @click.stop="() => {}"
                  class="overflow-hidden"
                  :id="tag.id"
                  :title="tag.title"
                  :description="tag.description"
                />
              </div>
            </div>
          </div>
          <div
            v-else
            data-test="empty-tags-list"
            class="w-full min-h-[90vh] flex flex-col items-center justify-center p-12"
          >
            <img
              src="@/assets/images/notes.svg"
              alt="tags"
              class="w-1/2 lg:w-1/3 mb-12 grayscale"
            />
            <p
              class="font-bold text-gray-800 dark:text-gray-300 text-xl text-center"
            >
              It seem like there is no tag please<br />
              click here for create one.
            </p>
          </div>
          <CreationButton
            data-test="open-tag-creation-nodal"
            title="New tag"
            @click.stop="toggleIstTagCreationMoalVisible"
            v-if="!istTagsListLoading"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 20px;
  break-inside: avoid;
}

.tag-container {
  column-count: 1;
}

@media screen and (min-width: 700px) {
  .tag-container {
    column-count: 3;
  }
}

@media screen and (min-width: 1024px) {
  .tag-container {
    column-count: 3;
  }
}
</style>
<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTagStore } from "@/stores/tag";
import type { Tag } from "@/domain/Tag";
import TagDetails from "./TagDetails.vue";
import TagItemSkeleton from "@/components/skeleton/TagItemSkeleton.vue";
import CreationButton from "@/components/button/CreationButton.vue";
import TagCreationModal from "./TagCreationModal.vue";
import TagListItem from "@/components/TagListItem.vue";
import { useSessionStore } from "@/stores/session";
import TheHeader from "@/components/TheHeader.vue";

const router = useRouter();
const route = useRoute();
const user = useSessionStore().session;

const tagToShowDetailsId = ref<string | undefined>();
watch(
  route,
  (value) => (tagToShowDetailsId.value = (value.params.id as string) ?? "")
);

const tagsList = ref<Tag[]>([]);
const istTagsListLoading = ref<boolean>(false);
const istTagCreationMoalVisible = ref<boolean>(false);

const fetchTags = async () => {
  try {
    istTagsListLoading.value = true;
    tagsList.value = await useTagStore().getTagsByUserId(user.id);
  } catch (error) {
    console.log(error);
  } finally {
    istTagsListLoading.value = false;
  }
};

onBeforeMount(async () => {
  await fetchTags();
});

const toggleIstTagCreationMoalVisible = () => {
  istTagCreationMoalVisible.value = !istTagCreationMoalVisible.value;
};
</script>
