<template>
    <div class="todoPage">
        <my-button @click="exit" style="align-self: flex-end" type="cancel"
            >Выйти</my-button
        >
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
            <todo-form
                :editablde="editebleTodo"
                @cancel="cancelCreateTodo"
                @create="createTodo"
                @edit="editTodo"
            />
        </my-modal>

        <todos-list
            v-if="!todosLoading"
            :todos="todos"
            @onDrag="sortTodos"
            @remove="removeTodo"
            @edit="openEdit"
            @check="checkTodo"
        />
        <div class="todoPage__loader" v-else>
            <my-loader></my-loader>
        </div>
    </div>
</template>

<script>
import TodoForm from "../components/TodoForm";
import TodosList from "../components/TodosList";
import axios from "axios";
import localStorageService from "../service/localstorage.service";
import { useRouter } from "vue-router";
export default {
    components: {
        TodoForm,
        TodosList,
    },
    data() {
        return {
            todos: [],
            editebleTodo: {},
            todosLoading: true,
            modalVisible: false,
            routes: useRouter(),
        };
    },
    mounted() {
        this.fetchTodoList();
    },
    methods: {
        checkTodo() {
            localStorageService.setTodos(this.todos);
        },
        createTodo(todo) {
            const newArr = [...this.todos];
            newArr.unshift(todo);
            this.todos = newArr;
            this.modalVisible = false;
        },
        cancelCreateTodo() {
            this.editableTodo = {};
            this.modalVisible = false;
        },
        removeTodo(todo) {
            const filtered = this.todos.filter((t) => t.id !== todo.id);
            this.todos = filtered;
        },
        openEdit(todo) {
            this.editebleTodo = { ...todo };
            this.modalVisible = true;
        },
        editTodo(todo) {
            const arr = this.todos.map((t) => {
                if (t.id === todo.id) {
                    return { ...todo };
                }
                return t;
            });
            this.todos = arr;
            this.modalVisible = false;
        },
        sortTodos(sortedArr) {
            if (sortedArr.length === this.todos.length) {
                this.todos = sortedArr;
            }
        },
        async fetchTodoList() {
            const todosInLS = localStorageService.getTodos();
            try {
                if (!todosInLS || todosInLS.length === 0) {
                    this.todosLoading = true;
                    const response = await axios.get(
                        "https://jsonplaceholder.typicode.com/todos?_limit=10"
                    );
                    const arr = response.data.map((t) => {
                        if (!t.createdAt) {
                            t.createdAt = Date.now();
                        }
                        return t;
                    });
                    return (this.todos = arr);
                }
                this.todos = todosInLS;
            } catch (error) {
                alert("Ошибка");
                console.log(error);
            } finally {
                this.todosLoading = false;
            }
        },
        showModal() {
            this.editebleTodo = {};
            this.modalVisible = true;
        },
        exit() {
            localStorageService.clearUserId();
            this.routes.replace("/register");
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
