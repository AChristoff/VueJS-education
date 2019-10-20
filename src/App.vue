<template>
    <div class="container">
        <Form v-if="!isSend" @form-send="onFormSend"></Form>
        <ConfirmMessage
            v-else
            :formInfo="formInfo"
        ></ConfirmMessage>
    </div>
</template>

<script>
    import ConfirmMessage from './components/ConfirmMessage.vue';
    import Form from './components/Form.vue'

    export default {
        name: 'app',
        components: {
            ConfirmMessage,
            Form,
        },
        data() {
            return {
                isSend: false,
                formInfo: {},
            }
        },
        methods: {
            onFormSend(formInfo) {
                this.formInfo = formInfo;
                this.isSend = true;
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
