<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="onLoginSubmit">
            <label for="login">Username</label>
            <input v-model="username" type="text" id="login" placeholder="Ivan Ivanov"/>
            <label for="password" >Password</label>
            <input v-model="password" type="password" id="password" placeholder="******"/>
            
            <input type="submit" value="Login"/>
        </form>
    </div>
</template>

<script>

    import {userAuthentication} from '@/services/authServices';
    
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
            }
        },
        mixins: [userAuthentication],
        methods: {
            onLoginSubmit() {
                document.querySelector('#loading-spinner').style.display = 'inline-block';
                this.loginUser(this.username, this.password);
            }
        }
    }
</script>

<style scoped>
    /* Login CSS */
    
    h1 {
        margin-top: 70px;
    }
    
    .login form {
        display: grid;
        width: 25%;
        margin: 0 auto;
    }
    
    .login input {
        padding: 10px;
        margin-bottom: 20px;
    }
    
    .login input[type="submit"] {
        margin: 20px auto 0;
        border: 2px solid dodgerblue;
        text-align: center;
        font-size: 14px;
        background: dodgerblue;
        color: white;
        border-radius: 7px;
        box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
    }
    
    .login input[type="submit"]:hover {
        color: dodgerblue;
        background: transparent;
    }
</style>