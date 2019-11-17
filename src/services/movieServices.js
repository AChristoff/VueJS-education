import axios from "axios";
import config from '@/config/config'

const getAuthtoken = () => localStorage.getItem('authtoken');

export const movieService = {
    data() {
        return {
            movies: [],
        }
    },
    created() {
        axios({
            url: `${config.basicURL}/appdata/${config.appKey}/movies`,
            method: 'GET',
            headers: {
                'Authorization': `Kinvey ${getAuthtoken()}`,
                'Content-Type': 'application/json',
            },
            data: {

            }
        }).then((res) => {
            this.movies = res.data;
            document.querySelector('#loading-spinner').style.display = 'none';
        });
    }
};