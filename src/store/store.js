import Vue from 'vue';
import Vuex from 'vuex';

import movieMutations from '@/store/movies/mutations';
import movieActions from '@/store/movies/actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movies: [],
        isLoading: false,
    },
    mutations: movieMutations,
    actions: movieActions,
});