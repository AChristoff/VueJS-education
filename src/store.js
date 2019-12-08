import Vue from 'vue';
import Vuex from 'vuex';

import axios from "axios";
import config from '@/config/config'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movies: [],
        isLoading: false,
    },
    mutations: {
        GET_ALL_MOVIES (state, payload) {
            state.movies = payload;
        },
        LOADING (state, isLoading) {
            if (isLoading) {
                document.querySelector('#loading-spinner').style.display = 'block';
            } else {
                document.querySelector('#loading-spinner').style.display = 'none';
            }
        }
    },
    actions: {
        getAll(context) {
            context.commit('LOADING', true);

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
                context.commit('LOADING', false);
                context.commit('GET_ALL_MOVIES', res.data);
            });
        }
    }
});