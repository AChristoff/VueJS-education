import axios from 'axios';
import config from '@/config/config'

export default {
    getAll(context) {
        context.commit('LOADING', true);

        axios({
            url: `${config.basicURL}/appdata/${config.appKey}/movies`,
            method: 'GET',
            headers: {
                'Authorization': `Kinvey ${config.getAuthtoken()}`,
                'Content-Type': 'application/json',
            },
            data: {}
        }).then((res) => {
            context.commit('LOADING', false);
            context.commit('GET_ALL_MOVIES', res.data);
        });
    }
}