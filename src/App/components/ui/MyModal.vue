<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div @click.stop class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-modal",
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideModal() {
            this.$emit("hideModal", false);
        },
    },
};
</script>

<style scoped>
.modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}
.modal__content {
    margin: auto;
    background: white;
    border-radius: 15px;
    min-height: 70px;
    min-width: 400px;
    padding: 20px;
}
</style>
