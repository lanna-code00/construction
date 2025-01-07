import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head"; // Import createHead from @vueuse/head

const app = createApp(App);

app.use(router);
app.use(createHead()); // Use createHead for meta management
app.mount("#app");
