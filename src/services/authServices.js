import axios from 'axios';
import config from '@/config/config'

const basicURL = 'https://baas.kinvey.com';
const authSting = btoa(`${config.appKey}:${config.appSecret}`);

export const register = {
    methods: {
        registerUser(username, password) {

            axios({
                url: `${basicURL}/user/${config.appKey}`,
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${authSting}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    username,
                    password,
                }
            }).then((res) => {
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('authtoken', res.data._kmd.authtoken);

                this.$router.push('/');
            });
        }
    }
};


export const authentication = {
    computed: {
        isAuth() {
          return localStorage.getItem('authtoken') !== null;
        }
    }
};
