<template>
    <div class="todo">
        <div class="todo__buttons">
            <my-button type="cancel" @click="$emit('onDelete', todo.id)"
                >Удалить</my-button
            >
        </div>
        <div class="todo__content">
            <h4>{{ todo.title }}</h4>
            <input
                type="checkbox"
                v-model="todo.completed"
                v-bind:id="todo.id"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
.todo {
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 3px solid rgb(50, 173, 255);
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
}

.todo__content {
    display: flex;
}
.todo__buttons {
    align-self: self-end;
}
.todo h4 {
    flex-grow: 1;
}
</style>
