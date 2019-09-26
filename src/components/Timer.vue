<template>
    <div>
    
        <!-- Proprs (from App) -->
        <h2>{{message}}</h2>
        <p v-for="(number, index) in numbers" :key="index">{{index + " - " + number}}</p>
        
        <!-- Anonymous slots (from App) -->
        <slot>Default content is there is no incoming data</slot>
        <!-- Named slots (from App) -->
        <hr>
        <slot name="personSlotName" :person="person" >Default name - Pesho</slot>
        <hr>
        <slot name="message">Default message - Hi</slot>
       
        
    </div>
</template>

<script>
    export default {
        name: "Timer",
        props: {
            message: {
                type: String,
                default: 'default value',
                validator(value) {
                    return value.length < 20;
                }
            },
            numbers: {
                type: Array,
                validator(arr) {
                    return arr.every(el => typeof el === 'string')
                },
                required: true,
            },
        },
        data() {
            return {
                person: {
                    name: 'Pesho from Timer component',
                    age: 18,
                    email: 'pesho@mail.com'
                }
            }
        }
    }
</script>

<style scoped>

</style>