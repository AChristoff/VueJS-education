<template>
    <div>
        <h1>{{todoName | reverse | lowercase}}</h1>
        
        <label for="new-task">Add Item</label>
        <input id="new-task" type="text" v-model="todoName"/>
        <button @click="addNewTodo">Add</button>
    </div>
</template>

<script>
    import {formattingfMixins, someOtherMixins } from '../mixins/formatMixins';

    export default {
        name: "AddTodo",
        methods: {
            addNewTodo() {
                if (this.todoName.trim().length > 0) {
                    
                    this.$emit('AddTodo', this.todoName);
                    this.todoName = '';
                }
            }
        },
        mixins: [
            formattingfMixins,
            someOtherMixins
        ],
        filters: {
          lowercase(value) {
              return value.toLowerCase();
          }
        },
        data() {
            return {
                todoName: '',
            }
        },
        created() {
            console.log('from Component');
        }
    }
</script>

<style scoped>
    label[for="new-task"] {
        display: block;
        margin: 0 0 20px;
    }
    
    input#new-task {
        float: left;
        width: 318px;
    }
    
    p > button:hover {
        color: #0fc57c;
    }
</style>