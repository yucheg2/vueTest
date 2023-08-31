<template>
    <form class="todoForm" @submit.prevent>
        <h3 v-if="editablde.id">Изменить задачу</h3>
        <h3 v-else>Создать задачу</h3>
        <label for="title"> Заголовок</label>
        <input
            id="title"
            v-model="todo.title"
            type="text"
            class="todoForm__input"
            placeholder="Введите заголовок задачи"
        />
        <label for="date"> Дата выполнения задачи</label>
        <input
            type="date"
            class="todoForm__input"
            v-model="todo.expiers.date"
            id="date"
        />
        <label for="time"> Время выполнения задачи</label>
        <input
            id="time"
            v-model="todo.expiers.time"
            class="todoForm__input"
            type="time"
        />
        <label for="title"> Описание </label>
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
                v-if="editablde.id"
                class="todoForm__edit"
                :disabled="todo.title === ''"
                type="submit"
                @click="onEdit"
                >Изменить</my-button
            >
            <my-button
                v-else
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
import { format } from "date-fns";
export default {
    props: {
        editablde: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            todo: {
                title: this.editablde.title || "",
                desc: this.editablde.desc || "",
                expiers: this.editablde.expiers
                    ? { ...this.editablde.expiers }
                    : {
                          date: "",
                          time: "",
                      },
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
            console.log(this.todo);
        },
        onSubmit() {
            this.todo.id = Date.now();
            this.todo.completed = false;
            this.todo.createdAt = Date.now();
            if (this.todo.expiers.time && !this.todo.expiers.date) {
                this.todo.expiers.date = format(Date.now(), "yyyy-MM-dd");
            }

            this.$emit("create", this.todo);
            this.todo = {
                title: "",
                desc: "",
            };
        },
        onEdit() {
            if (this.todo.expiers.time && !this.todo.expiers.date) {
                this.todo.expiers.date = format(Date.now(), "yyyy-MM-dd");
            }

            this.$emit("edit", { ...this.editablde, ...this.todo });
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

label {
    text-align: left;
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
