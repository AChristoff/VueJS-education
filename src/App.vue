<template>
    <div class="container">
        <button>Add</button>
        <button>ToDo</button>
        <button>Complete</button>
        
        <p>
            <label for="new-task">Add Item</label>
            <input id="new-task" type="text"/>
            <button>Add</button>
        </p>
        
        <h3>Completed</h3>
        <ul id="completed-tasks">
            <li>
                <label>Go to Gym</label>
                <button class="restore">Restore</button>
                <button class="delete">Delete</button>
            </li>
            <li>
                <label>Go to Store</label>
                <button class="restore">Restore</button>
                <button class="delete">Delete</button>
            </li>
        </ul>
        
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
            <li>
                <label>Feed the Cat</label>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'app',
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
        width: 400px;
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
        width: 60px;
        margin: 10px 0 0;
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
    
    /* Add Item  */
    
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
    
    /* ToDo List */
    
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
    
    button {
        margin: 0 0 0 10px;
    }
    
    /* Completed Tasks */
    
    #completed-tasks label {
        text-decoration: line-through;
        color: #888;
    }
    
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
    
    li > .delete:hover {
        color: #cf2323;
    }
</style>
