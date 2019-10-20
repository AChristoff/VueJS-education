<template>
    
    <div class="container">
        <Form v-if="!isSend" @form-send="onFormSend"></Form>
        <ConfirmMessage
            v-else
            :email="this.info.email"
            :password="this.info.password"
            :age="this.info.age"
            :description="this.info.description"
            :skills="this.info.skills"
            :gender="this.info.gender"
            :selectedCountry="this.info.selectedCountry"
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
                info: {},
            }
        },
        methods: {
            onFormSend(info) {
                this.info = info;
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
