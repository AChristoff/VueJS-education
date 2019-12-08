import Vue from 'vue';
import Vuex from 'vuex';

import axios from "axios";
import config from '@/config/config'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movies: [],
    },
    mutations: {
        GET_ALL_MOVIES (state, payload) {
            console.log(payload);
            state.movies = payload;
        }
    },
    actions: {
        getAll(context) {
            axios({
                url: `${config.basicURL}/appdata/${config.appKey}/movies`,
                method: 'GET',
                headers: {
                    'Authorization': `Kinvey ${config.getAuthtoken()}`,
                    'Content-Type': 'application/json',
                },
                data: {

                }
            }).then((res) => {

                context.commit('GET_ALL_MOVIES', res.data);

                document
                    .querySelector('#loading-spinner')
                    .style
                    .display = 'none';
            });
        }
    }
});