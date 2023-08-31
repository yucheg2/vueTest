<template>
    <div>
        <h1>Страница регистрации</h1>
        <register-form />
    </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";
export default {
    components: {
        RegisterForm,
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>
