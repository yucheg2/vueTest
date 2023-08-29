<template>
    <div class="todosList" v-if="todos?.length > 0">
        <div class="todosList__header">
            <Label for="serch"><h3>Список задач:</h3></Label>
            <input
                id="serch"
                placeholder="Поиск по заголовку..."
                type="text"
                v-model="serchedText"
                @input="filterTodo"
            />
        </div>
        <div class="todosList__items">
            <draggable v-model="array" tag="div" item-key="id">
                <template #item="{ element: todo }">
                    <todo-item
                        class="sortable"
                        :id="todo.id"
                        :todo="todo"
                        @onDelete="$emit('remove', todo)"
                    />
                </template>
            </draggable>
            <!-- сохранять изменения после перетаскивания -->
        </div>
    </div>
    <h2 v-show="todos.length === 0" style="color: darkgrey; text-align: center">
        Список задач пуст
    </h2>
</template>

<script>
import TodoItem from "./TodoItem";
import draggable from "vuedraggable";
export default {
    components: {
        TodoItem,
        draggable,
    },
    props: {
        todos: {
            type: Array,
        },
    },
    data() {
        return {
            serchedText: "",
            array: this.todos,
        };
    },
    watch: {
        todos(newValue) {
            console.log(newValue);
            this.array = newValue.filter((t) =>
                t.title.includes(this.serchedText)
            );
        },
    },
    methods: {
        filterTodo() {
            this.array = this.todos.filter((t) =>
                t.title.includes(this.serchedText)
            );
        },
    },
};
</script>

<style lang="css" scoped>
.todosList__header {
    display: flex;
}
#serch {
    margin-left: 10px;
    flex-grow: 1;
    align-self: center;
    height: 30px;
}
.todosList__items {
}
</style>
