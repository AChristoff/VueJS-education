import axios from 'axios';
import config from '@/config/config'

export const userAuthentication = {
    methods: {
        registerUser(username, password) {

            axios({
                url: `${config.basicURL}/user/${config.appKey}`,
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${config.authSting}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    username,
                    password,
                }
            }).then((res) => {
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('authtoken', res.data._kmd.authtoken);
                document.querySelector('#loading-spinner').style.display = 'none';
                this.$router.push('/all-movies');
            });
        },
        loginUser(username, password) {

            axios({
                url: `${config.basicURL}/user/${config.appKey}/login`,
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${config.authSting}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    username,
                    password,
                }
            }).then((res) => {
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('authtoken', res.data._kmd.authtoken);
                document.querySelector('#loading-spinner').style.display = 'none';
                this.$router.push('/all-movies');
            });
        }
    }
};


export const authenticate = {
    data() {
        return {
            isAuth: localStorage.getItem('authtoken'),
            username: localStorage.getItem('username'),
        }
    },
    watch:{
        $route (to, from){
            this.isAuth = localStorage.getItem('authtoken') !== null;
            this.username = localStorage.getItem('username');
        }
    },
};
