<template>
    <ul>
        <li v-for="(route, idx) in routes" :key="idx">
            <router-link :to="route.link" class="btn btn-primary btn-lg btn-block">
                {{route.name}}
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TopNav",
        data() {
            return {
                routes: [
                    {link: '/', name: 'Home'},
                    {link: '/contacts', name: 'Contacts'},
                    {link: '/message', name: 'Message'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        list-style: none outside;
        margin: 0;
        padding: 0;
        
        li:not(:first-child) {
            margin-left: 10px;
            padding: 0;
        }
    }
</style>