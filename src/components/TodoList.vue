<template>
    <div>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
            <li v-for="todo in todos" :key="todo.id">
                <label>{{todo.name}}</label>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: {
            todos: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<style scoped>
    li {
        overflow: hidden;
        padding: 20px 0;
        border-bottom: 1px solid #eee;
    }
    
    li > label {
        font-size: 18px;
        line-height: 40px;
        width: 237px;
        padding: 0 0 0 11px;
    }
    
    button:not(:first-child) {
        margin: 0 0 0 10px;
    }
</style>