import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/utils/axios";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { useSessionStore } from "./stores/session";

const app = createApp(App);

app.use(createPinia()).use(router);

router.beforeEach(async (to, from, next) => {
  const authRequired = !to.meta.isPublic;
  const sessionStore = useSessionStore();

  if (authRequired) {
    if (!sessionStore.isSigned()) {
      await router.push("/auth/signin");
    }
  }
  next();
});

app.mount("#app");
