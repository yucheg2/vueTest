<template>
    <div>
        <h1>Страница входа</h1>
        <login-form />
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
    components: {
        LoginForm,
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>
