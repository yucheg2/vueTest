<template>
    <button v-bind:disabled="disabled" v-bind:class="type">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button",
    props: {
        type: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="css" scoped>
button {
    cursor: pointer;
    padding: 10px;
    transition-duration: 0.4s;
    border-radius: 10px;
}
.cancel {
    border-color: #db3434;
    background-color: #db3434;
    color: white;
}

.cancel:hover {
    border-color: #b92d2d;
    background-color: #b92d2d;
    color: white;
}

.submit {
    border-color: #235ad1;
    background-color: #235ad1;
    color: white;
}

.submit:hover {
    border-color: #235ad1;
    background-color: #235ad1;
    color: white;
}

.submit:disabled,
.submit[disabled] {
    cursor: not-allowed;
    background-color: #6c7589;
    color: #9ba1ae;
}
</style>
