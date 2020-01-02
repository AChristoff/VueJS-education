<template>
    <div id="app">
        <page-header></page-header>
        
        <div class="app-body">
            <router-view></router-view>
        </div>
        
        <page-footer></page-footer>
        <div id="loading-spinner"></div>
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
    
    @import '@/sass/_buttons.scss';
    
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
    
        #loading-spinner {
            display: none;
            position: fixed;
            top: 40vh;
            left: 46.5vw;
            width: 80px;
            height: 80px;
    
            &:after {
                content: " ";
                display: block;
                width: 54px;
                height: 54px;
                margin: 8px;
                border-radius: 50%;
                border: 6px solid #0064C6;
                border-color: #0064C6 transparent #0064C6 transparent;
                animation: loading-spinner-animation 1.2s linear infinite;
            }
    
            @keyframes loading-spinner-animation {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        }
        
    }
</style>
