<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="onLoginSubmit">
            <label for="login">Username</label>
            <input v-model="username" type="text" id="login" placeholder="Ivan Ivanov"/>
            <label for="password" >Password</label>
            <input v-model="password" type="password" id="password" placeholder="******"/>
            
            <input class="login-btn" type="submit" value="Login"/>
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
    
    .login input[type="submit"]:hover {
        color: dodgerblue;
        background: transparent;
    }
</style>