import { createApp } from "vue";
import uiComponents from "./App/components/ui";
import App from "./App/App.vue";

const app = createApp(App);

uiComponents.forEach((component) => {
    app.component(component.name, component);
});

app.mount("#app");
