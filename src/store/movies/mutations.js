export default {

    GET_ALL_MOVIES(state, payload) {
        state.movies = payload;
    },
    LOADING(state, isLoading) {
        if (isLoading) {
            document.querySelector('#loading-spinner').style.display = 'block';
        } else {
            document.querySelector('#loading-spinner').style.display = 'none';
        }
    }
}