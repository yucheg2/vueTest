<template>
    <form class="todoForm" @submit.prevent>
        <h3>Создать задачу</h3>
        <input
            v-model="todo.title"
            type="text"
            class="todoForm__input"
            placeholder="Введите заголовок задачи"
        />
        <textarea
            v-model="todo.desc"
            class="todoForm__textarea"
            placeholder="Введите описание задачи"
        ></textarea>
        <div class="todoForm__butons">
            <button class="todoForm__cancel" @click="onCancel">Отменить</button>
            <button class="todoForm__submit" @click="onSubmit">Создать</button>
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
            this.todo.title = "";
            this.todo.desc = "";
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

button {
    cursor: pointer;
    padding: 10px;
    transition-duration: 0.4s;
    border-radius: 10px;
    margin-left: 10px;
}
.todoForm__cancel {
    border-color: #db3434;
    background-color: #db3434;
    color: white;
}

.todoForm__cancel:hover {
    border-color: #b92d2d;
    background-color: #b92d2d;
    color: white;
}

.todoForm__submit {
    border-color: #088de6;
    background-color: #088de6;
    color: white;
}

.todoForm__submit:hover {
    border-color: #088de6;
    background-color: #088de6;
    color: white;
}
</style>
