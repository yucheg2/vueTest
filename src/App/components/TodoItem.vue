<template>
    <div :class="'todo' + (isExpires ? '_expired' : '')">
        <div class="todo__header">
            <div>
                <div style="margin-bottom: 5px">Создано {{ time }}</div>
                <div v-if="todo?.expiers && todo.expiers.date !== ''">
                    <div>
                        {{ isExpires ? "Просрочено" : "Выполнить до" }}:
                        <br />
                        {{
                            (todo.expiers.date
                                ? todo.expiers.date
                                      .split("-")
                                      .reverse()
                                      .join(".")
                                : "") +
                            " " +
                            todo.expiers.time
                        }}
                    </div>
                </div>
            </div>
            <div class="todo__buttons">
                <my-button
                    class="todo__changeBtn"
                    type="submit"
                    @click="$emit('onEdit', todo)"
                    >Изменить</my-button
                >
                <my-button
                    class="todo__deleteBtn"
                    type="cancel"
                    @click="$emit('onDelete', todo.id)"
                    >Удалить</my-button
                >
            </div>
        </div>
        <div class="todo__content">
            <h4>{{ todo.title }}</h4>
            <input
                class="todo__checkbox"
                type="checkbox"
                v-model="todo.completed"
                v-bind:id="todo.id"
                @change="$emit('onCheck', todo)"
            />
        </div>
        <div class="todo__footer" v-if="todo.desc && todo.desc !== ''">
            <p :class="showDesc ? 'show' : ''">{{ todo.desc }}</p>
            <div @click="togleShow" style="margin-left: auto; cursor: pointer">
                {{ showDesc ? "Скрыть" : "Подробнее" }}
            </div>
        </div>
    </div>
</template>

<script>
import getTime from "../utils/getTime";
import isExpires from "../utils/isExpires";
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            time: getTime(this.todo.createdAt),
            showDesc: false,
            isExpires: this.todo?.expiers
                ? isExpires(this.todo.expiers.date, this.todo.expiers.time)
                : "",
        };
    },
    watch: {
        todo() {
            this.isExpires = this.todo?.expiers
                ? isExpires(this.todo.expiers.date, this.todo.expiers.time)
                : "";
        },
    },
    methods: {
        togleShow() {
            this.showDesc = !this.showDesc;
        },
    },
};
</script>

<style lang="css" scoped>
.todo__checkbox {
    transform: scale(200%);
}
.todo {
    overflow: hidden;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 3px solid rgb(50, 173, 255);
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
    transition: 200ms;
}
.todo_expired {
    overflow: hidden;
    background-color: rgb(194, 194, 194);
    display: flex;
    flex-direction: column;
    border: 3px solid rgb(36, 122, 179);
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
    transition: 200ms;
}
.todo__footer {
    display: flex;
    flex-direction: column;
}
.todo__footer p {
    margin: 0;
    overflow: hidden;
    height: 0;
}

.todo__footer p.show {
    height: auto;
}

.todo__buttons {
    display: flex;
    justify-content: end;
    align-self: flex-start;
}
.todo__content {
    display: flex;
}
.todo__header {
    display: flex;
    justify-content: space-between;
}
.todo__changeBtn {
    margin-right: 5px;
}
.todo h4 {
    flex-grow: 1;
}
.todo_expired h4 {
    flex-grow: 1;
}

@media (max-width: 760px) {
    .todo__changeBtn {
        margin-right: 0;
    }
}

@media (max-width: 400px) {
    .todo__changeBtn {
        margin-right: 0;
    }
}
</style>
