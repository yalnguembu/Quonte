<template>
  <main class="md:p-10">
    <div class="mx-auto border rounded p-4 md:p-8 md:2/3 lg:w-1/2 xl:w-2/5">
      <h1 class="font-bold text-2xl text-center">New project</h1>
      <form class="mt-4" @submit.prevent="() => {}">
        <div class="my-4">
          <TextInput
            label="Name"
            v-model="name"
            placeholder="Enter the name of the project"
            error=""
          />
        </div>
        <div class="my-4">
          <TextInput
            label="Team"
            v-model="name"
            placeholder="Enter the name of the project"
            error=""
          />
        </div>
        <div class="my-4">
          <TextAreaInput
            rows="3"
            v-model="description"
            label="Description"
            placeholder="Enter the description of the project"
            error=""
          />
        </div>
        <div class="mt-4 flex flex-row justify-between items-center">
          <ImageInput label="Image" v-model="name" error="" />
          <BaseButton title="Create" />
        </div>
      </form>
    </div>
  </main>
</template>
<script setup lang="ts">
import TextInput from "../components/TextInput.vue";
import TextAreaInput from "../components/TextAreaInput.vue";
import ImageInput from "../components/ImageInput.vue";
import BaseButton from "../components/BaseButton.vue";
import type { Ref } from "vue";
import { ref } from "vue";

const name: Ref = ref("");
const description: Ref = ref("");
</script>
