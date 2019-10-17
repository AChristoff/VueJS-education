<template>
    <div>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
            <ListItem
                v-for="todo in incompletedTodos"
                :key="todo.id"
                :todo="todo"></ListItem>
        </ul>
    </div>
</template>

<script>
    
    import ListItem from "./ListItem";

    export default {
        name: "TodoList",
        components: {ListItem},
        comments: {
            ListItem,
        },
        props: {
            incompletedTodos: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>