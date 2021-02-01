import { createApp } from "vue";
import App from "./App.vue";
import { auth } from "./lib/firebase";
import router from "./router";
import store from "./store";

auth.onAuthStateChanged(() => {
  createApp(App)
    .use(router)
    .use(store)
    .mount("#app");
});
