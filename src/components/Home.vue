<template>
    <div>
        <h1>HOME PAGE</h1>
        <button @click="onBtnClick">Contact us!</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            onBtnClick() {
                this.$router.push('contacts');
            }
        }
    }
</script>

<style scoped>

</style>