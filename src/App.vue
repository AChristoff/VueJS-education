<template>
    <div class="container">
        <TopNav></TopNav>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopNav from './components/TopNav.vue';

    export default {
        name: 'app',
        components: {
            TopNav,
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
