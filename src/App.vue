<template>
    <div class="container">
        <TopNav></TopNav>
        <router-view>
            <Home></Home>
            <Form v-if="!isSend" @form-send="onFormSend"></Form>
            <ConfirmMessage
                v-else
                :formInfo="formInfo"
            ></ConfirmMessage>
        </router-view>
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import TopNav from './components/TopNav.vue';
    import ConfirmMessage from './components/ConfirmMessage.vue';
    import Form from './components/Form.vue';

    export default {
        name: 'app',
        components: {
            Home,
            TopNav,
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
    
    .container {
        margin: 30px auto 60px auto;
    }

</style>
