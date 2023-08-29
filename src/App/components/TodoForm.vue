<template>
    <form class="todoForm" @submit.prevent>
        <h3>Создать задачу</h3>
        <input
            v-model="todo.title"
            type="text"
            v-bind:class="'todoForm__input'"
            placeholder="Введите заголовок задачи"
        />
        <textarea
            v-model="todo.desc"
            class="todoForm__textarea"
            placeholder="Введите описание задачи"
        ></textarea>
        <div class="todoForm__butons">
            <my-button
                style="margin-right: 10px"
                type="cancel"
                @click="onCancel"
                >Отменить</my-button
            >
            <my-button
                class="todoForm__submit"
                :disabled="todo.title === ''"
                type="submit"
                @click="onSubmit"
                >Создать</my-button
            >
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            todo: {
                title: "",
                desc: "",
            },
        };
    },
    methods: {
        onCancel() {
            this.todo = {
                title: "",
                desc: "",
            };
            this.$emit("cancel", null);
        },
        onSubmit() {
            this.todo.id = Date.now();
            this.todo.completed = false;

            this.$emit("create", this.todo);
            this.todo = {
                title: "",
                desc: "",
            };
        },
    },
};
</script>

<style lang="css" scoped>
.todoForm {
    text-align: center;
    display: flex;
    flex-direction: column;
}

.todoForm h3 {
    margin-top: 0;
}
.todoForm__input {
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
}

.todoForm__butons {
    display: flex;
    justify-content: end;
}

.todoForm__textarea {
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
    resize: vertical;
}
</style>
