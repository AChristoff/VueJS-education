<template>
    <div class="home">
        <h1>Welcome!</h1>
        <a class="all-movies-link" v-if="isAuth" href="/movie/all">See all movies</a>
    </div>
</template>

<script>

    export default {
        name: "Home",
    }
</script>

<style scoped lang="scss">
    /* Home CSS  */
    .home {
        text-align: center;
        
        h1 {
            margin-bottom: 3em;
        }
        
        .all-movies-link {
            text-decoration: none;
            font-size: 32px;
            font-weight: bold;
            width: 60%;
            margin: 20px auto 0;
            border: 2px solid dodgerblue;
            text-align: center;
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