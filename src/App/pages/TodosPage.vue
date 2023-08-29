<template>
    <div class="todoPage">
        <todo-form @create="createTodo" />
        <todos-list :todos="todos" />
    </div>
</template>

<script>
import TodoForm from "../components/TodoForm";
import TodosList from "../components/TodosList";
export default {
    components: {
        TodoForm,
        TodosList,
    },
    data() {
        return {
            todos: [{ id: 1, title: "asd" }],
        };
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo);
            console.log(this.todos);
        },
    },
};
</script>
