<template>
  <div>
    <label v-if="label" class="font-500 dark:text-gray-100">{{ label }}</label>
    <div class="flex w-full">
      <div
        class="border dark:border-gray-600 mt-2 rounded py-1 w-full relative"
      >
        <div v-if="withPreview">
          <TagItem
            :id="tag.id"
            v-for="(tag, index) in tagsPreview"
            :key="index"
            :title="tag.title"
          />
        </div>
        <input
          type="text"
          class="bg-transparent outline-2 px-2 outline-green-700 w-full"
          :placeholder="placeholder"
          v-model="preview"
          @click.stop="toggleIsOptionsListVisibility"
        />
        <ul
          class="border dark:border-gray-700 rounded p-2 block absolute top-10 left-0 z-10 bg-white dark:bg-gray-800 w-full max-h-40 overflox-y-auto shadow-xl"
          v-if="isOptionsListVisible"
          ref="opionsList"
        >
          <li v-if="!tagsList.length" class="dark:text-gray-100">
            Noting found
          </li>
          <template v-else>
            <li
              v-for="(tag, index) in tagsList"
              :key="index"
              @click="() => select(tag)"
              class="px-2 py-1 rounded dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {{ tag.title }}
            </li>
          </template>
        </ul>
      </div>
      <BaseButton title="Add" v-if="withPreview" @click="addTags" />
    </div>
    <div class="flex flex-wrap">
      <button
        @click="() => removeTag(tag.id)"
        v-for="(tag, index) in modelValue"
        :key="index"
      >
        <TagItem :title="tag.title" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, type PropType, watch } from "vue";
import type { Tag as TagType } from "@/utils/type";
import { useDetectOutsideClick } from "@/utils/outsideClick";
import BaseButton from "../button/BaseButton.vue";
import TagItem from "../TagItem.vue";

const props = defineProps({
  modelValue: {
    type: Array as PropType<TagType[]>,
    required: true,
    default: () => [],
  },
  withPreview: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  tags: {
    type: Array as PropType<TagType[]>,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue", "addTags"]);

const preview = ref<string>("");
const tagsPreview = ref<TagType[]>([]);
const tagsList = ref<TagType[]>(
  props.tags.filter(
    (el) => !props.modelValue.map((tag) => tag.title).includes(el.title)
  )
);
const isOptionsListVisible = ref<boolean>(false);
const optionsList = ref<HTMLUListElement | undefined>();

watch(preview, (value) => {
  tagsList.value = props.tags.filter((tag) => tag.title.search(value) !== -1);
});

watch(props, (value) => {
  tagsList.value = value.tags.filter(
    (el) => !value.modelValue.map((tag) => tag.title).includes(el.title)
  );
});

const addTags = () => {};

const removeTag = (id: string) => {
  emit(
    "update:modelValue",
    props.modelValue.filter((tag) => tag.id !== id)
  );
};

const select = (tag: TagType) => {
  emit("update:modelValue", [...props.modelValue, tag]);
};
const toggleIsOptionsListVisibility = () =>
  (isOptionsListVisible.value = !isOptionsListVisible.value);

useDetectOutsideClick(optionsList, () => {
  if (isOptionsListVisible.value) toggleIsOptionsListVisibility();
});
</script>
