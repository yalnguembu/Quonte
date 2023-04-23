<template>
  <div
    className="w-full h-full bg-yellow-200 dark:bg-gray-900 flex items-center justify-center p-7"
  >
    <div
      className="card bg-white dark:bg-gray-900 dark:border border-gray-700 p-8 rounded-lg shadow w-4/5 lg:w-2/5 xl:w-1/3"
    >
      <div className="text-center">
        <h1 className="font-bold text-xl dark:text-gray-100">Sign Up</h1>
        <p className="text-gray-500 font-bold p-6 dark:text-gray-400">
          We need some informations for configure your personal space
        </p>
      </div>
      <div
        v-if="requestError"
        class="W-full border-l-4 border border-red-400 px-2 rounded w-full mb-4 bg-red-100"
      >
        <p class="text-gray-900 text-left" data-test="error-message">
          <InformationIcon class="mr-2" /> <span>{{ requestError }}</span>
        </p>
      </div>
      <div className="mb-2">
        <EmailInput
          data-test="name-input"
          label="Name"
          placeholder="Enter your name"
          v-model="user.email"
          :error="error.email"
        />
      </div>
      <div className="mb-2">
        <EmailInput
          data-test="email-input"
          label="Email"
          placeholder="Enter your email adress"
          v-model="user.email"
          :error="error.email"
        />
      </div>
      <div className="mb-2">
        <PasswordInput
          data-test="password-input"
          label="Password"
          placeholder="Enter your password"
          v-model="user.password"
          :error="error.password"
        />
      </div>
      <div className="w-full mb-6 mt-6">
        <BaseButton
          data-test="submit-button"
          :type="ButtonType.button"
          :title="loading ? 'loading...' : 'Sign Up'"
          class="w-full"
          theme="w-full px-8 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
        />
      </div>
      <h2 className="text-gray-500 text-sm text-center">
        Already member of us?
        <RouterLink
          to="sign-up"
          className="text-black dark:text-gray-100 hover:underline"
        >
          Go within!
        </RouterLink>
      </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSessionStore } from "@/stores/session";
import { reactive, ref, watch, toRef } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "@/components/BaseButton.vue";
import EmailInput from "@/components/form/EmailInput.vue";
import PasswordInput from "@/components/form/PasswordInput.vue";
import InformationIcon from "@/components/icons/InformationIcon.vue";
import { ButtonType } from "@/utils/type";

const router = useRouter();
const sessionStore = useSessionStore();
const user = reactive<{ email: string; password: string }>({
  email: "",
  password: "",
});
const loading = ref<boolean>(false);
const requestError = ref<string>("");
const error = reactive({
  email: "",
  password: "",
});

const isEmailValid = (): boolean => error.email.length <= 0;
const isPasswordValid = (): boolean => error.password.length <= 0;
const checkEmail = () => {
  if (user.email) error.email = "";
  else error.email = "This field is required";
};
const checkPassord = () => {
  if (user.password) error.password = "";
  else error.password = "This field is required";
};
const checkForm = (): void => {
  checkEmail();
  checkPassord();
};
const signIn = async () => {
  checkForm();
  if (isEmailValid() && isPasswordValid()) {
    loading.value = true;
    const request = await sessionStore.signIn(user);
    setTimeout(() => {}, 1000);
    loading.value = false;
    user.password = "";
    if (request?.success) window.location.href = "/";
    else
      request ? (requestError.value = request?.message) : "Please retry later";
  }
};

watch(toRef(user, "email"), () => {
  checkEmail();
});
watch(toRef(user, "password"), () => {
  checkPassord();
});
</script>
