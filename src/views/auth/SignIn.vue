<template>
  <section class="w-full h-full flex flex-col items-center justify-between p-8">
    <div class="w-full flex items-center lg:w-2/5 xl:w-1/3">
      <img src="/public/logo.png" alt="" class="w-12 h-14" />
      <h1 class="text-5xl font-bold text-emerald-600 align-middle ml-4">
        Bespace
      </h1>
    </div>

    <div
      class="w-full h-full flex items-center justify-between text-left lg:w-2/5 xl:w-1/3"
    >
      <div>
        <div
          v-if="error"
          class="W-full border-l-4 border border-red-400 px-2 py-2 rounded w-full mb-4 bg-red-100"
        >
          <p class="text-gray-900 text-left">
            <InformationIcon class="mr-2" /> <span>{{ error }}</span>
          </p>
        </div>
        <div class="p-6 border rounded">
          <div class="w-full border-b-2 pb-2">
            <h1 class="font-bold text-2xl">Sign'In</h1>
            <p class="text-gray-700 mt-2">
              Welcome back! We need some information to restore your session
            </p>
          </div>
          <form @submit.prevent="signIn" class="mt-4">
            <div>
              <EmailInput
                label="Email"
                placeholder="Enter your email adress"
                v-model="user.email"
              />
            </div>
            <div class="mt-4">
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                v-model="user.password"
              />
            </div>
            <div class="w-full mt-5 block text-right flex flex-row justify-end">
              <BaseButton
                type="submit"
                title="SignIn"
                class="w-full lg:w-32 font-bold inline"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useSessionStore } from "@/stores/session";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "@/components/BaseButton.vue";
import EmailInput from "@/components/form/EmailInput.vue";
import PasswordInput from "@/components/form/PasswordInput.vue";
import InformationIcon from "@/components/icons/InformationIcon.vue";

const router = useRouter();
const sessionStore = useSessionStore();
const user = reactive<{ email: string; password: string }>({
  email: "",
  password: "",
});
const error = ref<string>("");

const signIn = async () => {
  const request = await sessionStore.signIn(user);
  if (request.status === 200) router.push("/");
  else error.value = request.message;
};
</script>
