<template>
    <div class="log-component-elements">
        <h4>Timers results:</h4>
        <ul>
            <li v-for="(record, index) in records" :key="index">{{record.name}} - {{record.time}}</li>
        </ul>
    </div>
</template>

<script>
    import eventBus from "../tools/eventBus";

    export default {
        name: "Log",
        data() {
            return {
                records: [],
            }
        },
        methods: {
            onTimerStopped(eventData) {
                this.records.push(eventData);
            }
        },
        created() {
            // eventBus.$on('timer-stopped', this.onTimerStopped);
            this.$root.$on('timer-stopped', this.onTimerStopped);
        }
    }
</script>

<style scoped>

</style>