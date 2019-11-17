<template>
    <div class="register">
        <h1>Register</h1>
        <form id="register-form" @submit.prevent="onRegisterSubmit">
            <label for="username">Username</label>
            <input type="text" v-model="$v.username.$model" id="username" placeholder="Ivan Ivanov"/>
            <label for="email">Email</label>
            <input type="text" v-model="$v.email.$model" id="email" placeholder="ivan@gmail.com"/>
            <label for="password">Password</label>
            <input type="password" v-model="$v.password.$model" id="password" placeholder="******"/>
            
            <button type="submit"
                    form="register-form"
                    :disabled="$v.$invalid">Register
            </button>
        </form>
    </div>
</template>

<script>

    import {userAuthentication} from '@/services/authServices';
    import {
        required,
        minLength,
        maxLength,
        email,
    } from 'vuelidate/lib/validators';

    export default {
        name: "Register",
        data() {
            return {
                username: 'Pesho',
                password: '',
                email: '',
            }
        },
        mixins: [userAuthentication],
        validations: {
            username: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(20),
            },
            password: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(20),
            },
            email: {
                email,
            },
        },
        methods: {
            onRegisterSubmit() {
                document.querySelector('#loading-spinner').style.display = 'inline-block';
                this.registerUser(this.username, this.password);
            }
        }
    }
</script>

<style scoped>
    
    /* Register CSS */
    h1 {
        margin-top:40px;
    }
    
    .register {
        padding-top: 2em;
    }
    
    .register form {
        display: grid;
        width: 25%;
        margin: 0 auto;
    }
    
    .register input {
        padding: 10px;
        margin-bottom: 20px;
    }
    
    .register button {
        margin: 20px auto 0;
        padding: 8px 16px;
        border: 2px solid dodgerblue;
        text-align: center;
        font-size: 14px;
        background: dodgerblue;
        color: white;
        border-radius: 7px;
        box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
    }
    
    .register button:hover {
        color: dodgerblue;
        background: transparent;
    }
    
    .register button:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

</style>