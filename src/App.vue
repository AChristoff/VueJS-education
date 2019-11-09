<template>
    <div id="app">
        <page-header></page-header>
        
        <div class="app-body">
            <router-view></router-view>
        </div>
        
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from "@/components/common/PageHeader";
    import PageFooter from "@/components/common/PageFooter";

    export default {
        components: {
            PageHeader,
            PageFooter,
        }
    }

</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        
        #app {
            
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            
            h1 {
                text-align: center;
            }
            
            .app-body {
                margin-bottom: 40px;
            }
        }
        
    }
</style>
