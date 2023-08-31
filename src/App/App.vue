<template>
    <div class="app">
        <router-view></router-view>
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

<style scoped>
.app {
    padding: 0 30vh;
}
@media (max-width: 1200px) {
    .app {
        padding: 0 20vh;
    }
}
@media (max-width: 1000px) {
    .app {
        padding: 0 8vh;
    }
}
@media (max-width: 400px) {
    .app {
        padding: 0 5vh;
    }
}
</style>
