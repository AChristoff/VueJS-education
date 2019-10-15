<template>
    <div id="app">
        <!-- Data (local) -->
        <h1>{{title}}</h1>
        
        <Timer name="Pesho"></Timer>
        <Timer name="Gosho"></Timer>
        <Timer name="Penka"></Timer>
        <Log></Log>
        
        <hr>
        <hr>
        <hr>
        
        <Test :message="timerMessage" :numbers="timerList">
            <!-- Anonymous slots data (for Timer) -->
            <p>Anonymous slot data</p>
            <!-- Named slots data (for Timer) -->
            <template v-slot:personSlotName="slotProps">
                <p>{{slotProps.person.name}} / next is from App</p>
            </template>
            <template v-slot:message>
                <p>{{message}}</p>
            </template>
        </Test>
    
    </div>
</template>

<script>
    import Timer from "./components/Timer";
    import Log from "./components/Log";
    import Test from "./components/Test";

    export default {
        name: 'app',
        data() {
            return {
                title: 'VueJS project',
                timerMessage: 'List',
                timerList: ['A', 'B', 'C', 'D', 'E'],
                name: 'Gosho says',
                message: '"Hi from slot!"',
            }
        },
        components: {
            Timer,
            Log,
            Test,
        }
    }
</script>

<style>
    body {
        background: #404040;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #a7a7a7;
        margin-top: 60px;
    }
</style>
