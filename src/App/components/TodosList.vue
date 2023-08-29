<template>
    <div class="todo" v-for="todo in todos">
        <h4>{{ todo.title }}</h4>
    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
        },
    },
};
</script>

<style lang="css" scoped>
.todo {
    border: 3px solid rgb(50, 173, 255);
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
}
</style>
