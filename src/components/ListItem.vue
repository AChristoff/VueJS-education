<template>
    <li>
        <input
            v-focus
            v-highlight="'yellow'"
            v-if="todo.edit"
            type="text"
            v-model="newName"
            @keypress.enter="editTodoEnd()"
            @focusout="editTodoEnd()">
        <label v-else @dblclick="editTodoStart()">{{todo.name}}</label>
        <button class="complete" @click="completeTodo(todo.id)">Complete</button>
        <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
</template>

<script>
    export default {
        name: "ListItem",
        data() {
            return {
                newName: this.todo.name,
            }
        },
        props: {
            todo: {
                type: Object,
                required: true,
            }
        },
        directives: {
            focus: {
                inserted(el) {
                    el.focus();
                }
            },
            highlight: {
                update(el, binding) {
                    el.style.backgroundColor = binding.value;
                }
            }
        },
        methods: {
            completeTodo(todoId) {
                this.$root.$emit('complete-todo', todoId);
            },
            deleteTodo(todoId) {
                this.$root.$emit('delete-todo', todoId);
            },
            editTodoStart() {
                this.$root.$emit('edit-todo-start', this.todo.id);
            },
            editTodoEnd() {
                this.$root.$emit('edit-todo-end', Object.assign({}, this.todo, {name: this.newName}));
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
    
    li > label,
    li > input {
        font-size: 18px;
        line-height: 40px;
        width: 237px;
        min-height: 40px;
        padding: 0 0 0 11px;
    }

    li > label {
        border: 1px solid transparent;
    }

    li > label:hover {
        cursor: pointer;
        background: rgb(234, 234, 234);
        border-radius: 5px;
    }
    
    button:not(:first-child) {
        margin: 0 0 0 10px;
        min-height: 40px;
    }
</style>