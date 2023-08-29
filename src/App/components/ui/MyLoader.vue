<template>
    <div id="loader"></div>
</template>

<script>
export default {
    name: "my-loader",
};
</script>

<style scoped>
#loader {
    width: 3em;
    height: 3em;

    border-radius: 50%;
    border: 0.75em solid black;
    border-top-color: white;

    animation: 2s infinite loader;
}

@keyframes loader {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
