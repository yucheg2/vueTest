import { createRouter, createWebHistory } from "vue-router";
import localStorageService from "../service/localstorage.service";
import TodosPage from "../pages/TodosPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginPage from "../pages/LoginPage.vue";

const routes = [
    {
        path: "/",
        component: TodosPage,
        meta: {
            needAuth: true,
        },
    },
    {
        path: "/register",
        component: RegisterPage,
    },
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
    if (to.meta.needAuth) {
        if (localStorageService.getUserId()) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;
