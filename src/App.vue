<template>
    <div class="container">
        
        <button @click="changeTab('IncompletedTodos')">Todo List</button>
        <button @click="changeTab('CompletedTodos')">Completed</button>
        <button @click="changeTab('AddTodo')">Add</button>
        
        <keep-alive>
            <component
                :is="activeTab"
                :incompletedTodos="incompletedTodos"
                :completedTodos="completedTodos"
                @AddTodo="onAddTodo">
            
            </component>
        </keep-alive>
    
    </div>
</template>

<script>

    import AddTodo from './components/AddTodo';
    import CompletedTodos from './components/CompletedTodos';
    import IncompletedTodos from './components/IncompletedTodos';
    
    import {todos} from './assets/js/todos';

    export default {
        name: 'app',
        data() {
            return {
                activeTab: 'IncompletedTodos',
                todos,
            }
        },
        components: {
            AddTodo,
            CompletedTodos,
            IncompletedTodos,
        },
        computed: {
            incompletedTodos() {
                return this.todos.filter((x) => !x.completed);
            },
            completedTodos() {
                return this.todos.filter((x) => x.completed);
            }
        },
        methods: {
            changeTab(tabName) {
                this.activeTab = tabName;
            },
            onAddTodo(todoName) {
                this.todos.push({
                    id: this.todos.length,
                    name: todoName,
                    completed: false,
                })
            },
            onCompleteTodo(todoId) {
                this.changeTodoState(todoId, true);
            },
            onRestoreTodo(todoId) {
                this.changeTodoState(todoId, false);
            },
            onDeleteTodo(todId) {
                this.todos = this.todos.filter((x) => x.id !== todId);
            },
            changeTodoState(id, state) {
                return this.todos.find((x) => x.id === id).completed = state;
            },
            addEventListeners() {
                this.$root.$on('delete-todo', this.onDeleteTodo);
                this.$root.$on('complete-todo', this.onCompleteTodo);
                this.$root.$on('restore-todo', this.onRestoreTodo);
            }
        },
        mounted() {
            this.addEventListeners();
        }
    }
</script>

<style>
    /* Global Style */
    
    body {
        background: #fff;
        color: #333;
        font-family: Lato, sans-serif;
    }
    
    .container {
        display: block;
        max-width: 460px;
        margin: 100px auto 0;
    }
    
    ul {
        margin: 0;
        padding: 0;
    }
    
    li * {
        float: left;
    }
    
    li, h3 {
        clear: both;
        list-style: none;
    }
    
    input, button {
        outline: none;
    }
    
    button {
        background: none;
        border: 0px;
        color: #888;
        font-size: 15px;
        width: 90px;
        font-family: Lato, sans-serif;
        cursor: pointer;
    }
    
    button:hover {
        color: #333;
    }
    
    h3, label[for="new-task"] {
        color: #333;
        font-weight: 700;
        font-size: 15px;
        border-bottom: 2px solid #333;
        padding: 30px 0 10px;
        margin: 0;
        text-transform: uppercase;
    }
    
    input[type="text"] {
        margin: 0;
        font-size: 18px;
        line-height: 18px;
        height: 18px;
        padding: 10px;
        border: 1px solid #ddd;
        background: #fff;
        border-radius: 6px;
        font-family: Lato, sans-serif;
        color: #888;
    }
    
    input[type="text"]:focus {
        color: #333;
    }
</style>
