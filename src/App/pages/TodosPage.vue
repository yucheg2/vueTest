<template>
    <div class="todoPage">
        <h1 style="text-align: center">Страница с задачами</h1>
        <my-button
            :disabled="todosLoading"
            type="submit"
            class="todoPage__createBtn"
            @click="showModal"
        >
            <h3>Создать задачу</h3>
        </my-button>
        <my-modal v-model:show="modalVisible" @hideModal="cancelCreateTodo">
            <todo-form @cancel="cancelCreateTodo" @create="createTodo" />
        </my-modal>

        <todos-list v-if="!todosLoading" :todos="todos" @remove="removeTodo" />
        <div class="todoPage__loader" v-else>
            <my-loader></my-loader>
        </div>
    </div>
</template>

<script>
import TodoForm from "../components/TodoForm";
import TodosList from "../components/TodosList";
import axios from "axios";
export default {
    components: {
        TodoForm,
        TodosList,
    },
    data() {
        return {
            todos: [],
            todosLoading: true,
            modalVisible: false,
        };
    },
    mounted() {
        this.fetchTodoList();
        console.log(this.todos);
    },
    methods: {
        createTodo(todo) {
            const newArr = [...this.todos];
            newArr.unshift(todo);
            this.todos = newArr;
            this.modalVisible = false;
        },
        cancelCreateTodo() {
            this.modalVisible = false;
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t.id !== todo.id);
        },
        async fetchTodoList() {
            try {
                this.todosLoading = true;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=10"
                );
                this.todos = response.data;
            } catch (error) {
                alert("Ошибка");
                console.log(error);
            } finally {
                this.todosLoading = false;
            }
        },
        showModal() {
            this.modalVisible = true;
        },
    },
};
</script>

<style scoped>
.todoPage {
    display: flex;
    flex-direction: column;
}
.todoPage__loader {
    margin-top: 25px;
    align-self: center;
}
</style>
