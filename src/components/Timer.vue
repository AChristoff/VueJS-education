<template>
    <div class="timer-component">
        <p>{{name}}</p>
        <p>{{time}}</p>
        <button @click="onStartClick">{{buttonText}}</button>
    </div>
</template>

<script>
import eventBus from "../tools/eventBus";
    
    export default {
        name: "Timer",
        props: {
            name: String,
        },
        data() {
            return {
                time: 0,
                isStarted: false,
                timerID: -1,
            }
        },
        computed: {
            buttonText() {
                return this.isStarted ? 'Stop' : 'Start';
            }
        },
        methods: {
            onStartClick() {
                if (this.isStarted) {
                    clearInterval(this.timerID);
                    this.isStarted = false;
                    // eventBus.$emit('timer-stopped', {name: this.name, time: this.time});
                    this.$root.$emit('timer-stopped', {name: this.name, time: this.time});
                    this.time = 0;
                } else {
                    this.timerID = setInterval(() => this.time++, 1000);
                    this.isStarted = true;
                }
            },
        }
    }
</script>

<style scoped>

</style>