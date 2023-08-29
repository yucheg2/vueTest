<template>
    <div class="app">
        <todos-page />
    </div>
</template>

<script>
import TodosPage from "./pages/TodosPage";
export default {
    components: {
        TodosPage,
    },
};
</script>

<style lang="css" scoped>
.app {
    padding: 0 20vh;
}
</style>
