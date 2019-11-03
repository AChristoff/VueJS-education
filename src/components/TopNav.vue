<template>
    <ul>
        <li>
            <router-link to="/" class="btn btn-primary btn-lg btn-block">
                Home
            </router-link>
        </li>
        <li>
            <router-link to="/contacts" class="btn btn-primary btn-lg btn-block">
                Contacts
            </router-link>
        </li>
        <li>
            <router-link to="/message" class="btn btn-primary btn-lg btn-block">
                Message
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TopNav"
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