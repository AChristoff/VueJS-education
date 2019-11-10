import axios from 'axios';

export default {
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://baas.kinvey.com/',
            headers: {
            }
        });
    }
}

/*

import axios from 'axios';
import config from '@/config/config'

const authSting = btoa(`${config.appKey}:${config.appSecret}`);
axios({
    url: `https://baas.kinvey.com/user/${config.appKey}`,
    method: 'POST',
    data: {
        'username': this.username,
        'password': this.password,
    },
    headers: {
        'Authorization': `Basic ${authSting}`,
        'Content-Type': 'application/json',
    },
}).then(res => {
    console.log(res);
});*/
