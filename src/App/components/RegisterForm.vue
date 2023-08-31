<template>
    <form class="registerForm" @submit.prevent>
        <label for="text"><h3>Почта</h3></label>
        <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Введите почту"
        />
        <span class="errorMessage" v-if="message">{{ message }}</span>

        <label for="text"><h3>Пароль</h3></label>
        <div style="display: flex">
            <input
                style="flex-grow: 1"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                placeholder="Введите пароль"
            />
            <my-button @click="toggleShowPassWord">показать</my-button>
        </div>
        <div class="registerForm__footer">
            <router-link to="/login">Войти</router-link>

            <my-button
                :disabled="email && password ? false : true"
                @click="register"
                class="registerForm__submitButtin"
                type="submit"
                >Зарегистрироваться</my-button
            >
        </div>
    </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import localStorageService from "../service/localstorage.service";
import { useRouter } from "vue-router";
export default {
    data() {
        return {
            email: "",
            password: "",
            router: useRouter(),
            error: "",
            message: "",
            showPassword: false,
        };
    },
    watch: {
        error(newValue) {
            if (newValue !== "") {
                switch (newValue) {
                    case "auth/invalid-email":
                        this.message = "email введене не коректно";
                        break;
                    case "auth/user-not-found":
                        this.message =
                            "пользователя с таким email не сущесвует";
                        break;
                    case "auth/wrong-password":
                        this.message = "пароль введен не коректно";
                        break;
                    case "auth/weak-password":
                        this.message =
                            "пароль должен содержать минимум 6 символов";
                        break;
                    case "auth/email-already-in-use":
                        this.message = "этот email уже зарегистрирован";
                        break;

                    default:
                        break;
                }
            }
        },
        email() {
            this.message = "";
        },
        password() {
            this.message = "";
        },
    },
    methods: {
        register() {
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data) => {
                    const { uid } = data.user;
                    localStorageService.setUserId(uid);
                    this.router.push("/");
                })
                .catch((error) => {
                    this.error = error.code;
                });
        },
        toggleShowPassWord() {
            this.showPassword = !this.showPassword;
        },
    },
};
</script>

<style scoped>
.registerForm__submitButtin {
    margin-top: 30px;
}
.errorMessage {
    color: rgb(192, 0, 0);
    text-decoration: dashed underline rgb(192, 0, 0);
}
.registerForm__footer {
    display: flex;
    align-items: end;
    justify-content: space-between;
}
form {
    display: flex;
    flex-direction: column;
}
input {
    padding: 15px;
    border-radius: 15px;
}
</style>
