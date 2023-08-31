import { createApp } from "vue";
import uiComponents from "./App/components/ui";
import App from "./App/App.vue";
import router from "./App/routes/routes";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCZ-xY2CeHUrgizVMMbOjHWje3CW9Nq9hU",
    authDomain: "vue-test-4df44.firebaseapp.com",
    projectId: "vue-test-4df44",
    storageBucket: "vue-test-4df44.appspot.com",
    messagingSenderId: "922425021414",
    appId: "1:922425021414:web:9797593cae9a91bb0cbc27",
    measurementId: "G-VH63M9FV2S",
};

initializeApp(firebaseConfig);
const app = createApp(App);

uiComponents.forEach((component) => {
    app.component(component.name, component);
});

app.use(router).mount("#app");
