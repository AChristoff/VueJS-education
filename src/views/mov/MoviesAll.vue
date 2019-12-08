<template>
    <div class="home">
        <h1>All movies</h1>
        <ul class="movies-list">
            <li :id="movie._id" class="movie" v-for="movie in movies" :key="movie._id">
                <h2>{{movie.title}}</h2>
                <img :src="movie.poster"/>
                <button @click="toggleInfo($event)">Show Details</button>
                <span :class="['movie-info']">{{movie.storyLine}}</span>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "AllMovies",
        computed: {
            movies() {
                return this.$store.state.movies;
            }
        },
        methods: {
            toggleInfo(event) {
                event
                    .target
                    .closest('.movie')
                    .querySelector('.movie-info')
                    .classList
                    .toggle('visible');
            },
        },
        created() {
            this.$store.dispatch('getAll');
        }
    }
</script>

<style scoped lang="scss">
    /* Home CSS  */
    .home {
        text-align: center;
        
        .movies-list {
            display: flex;
            margin: 0 auto;
            width: 50%;
            justify-content: space-evenly;
            flex-wrap: wrap;
            
            .movie {
                display: grid;
                padding: 15px 20px;
            }
            
            img {
                margin: 0 auto;
                width: 220px;
                height: auto;
            }
            
            .movie-info {
                display: none;
                width: 220px;
                margin: 15px auto;
                
                &.visible {
                    display: inline-block;
                }
            }
        }
        
        button {
            width: 60%;
            margin: 20px auto 0;
            border: 2px solid dodgerblue;
            text-align: center;
            font-size: 14px;
            background: dodgerblue;
            color: white;
            border-radius: 7px;
            box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.5);
            padding: 10px 20px;
            
            &:hover {
                color: dodgerblue;
                background: transparent;
            }
        }
        
    }

</style>