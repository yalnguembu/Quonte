import { createApp } from "vue";
import { createPinia } from "pinia";
import { prepareApis } from "@/utils/api-config";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { useSessionStore } from "./stores/session";

prepareApis();

const app = createApp(App);

app.use(createPinia()).use(router);

router.beforeEach(async (to, from, next) => {
  const authRequired = !to.meta.isPublic;
  const userSession = useSessionStore().isSigned()

  if (authRequired) {
    if (!userSession) {
      await router.push("/auth/signin");
    }
  }
  next();
});

app.mount("#app");
