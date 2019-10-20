<template>
    
    <div class="card">
        <div class="card-header">
            <h4>Your Data</h4>
        </div>
        <div class="card-body">
            <p>Mail: {{formInfo.email}}</p>
            <p>Password: {{formInfo.password}}</p>
            <p>Age: {{formInfo.age}}</p>
            <p>Description: {{formInfo.description}}</p>
            <p><strong>Skill Set?</strong></p>
            <ul>
                <li v-for="(skill, index) in formInfo.skills" :key="index">{{skill}}</li>
            </ul>
            <p>Gender: {{formInfo.gender}}</p>
            <p>Country: {{formInfo.selectedCountry}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConfirmMessage",
        props: {
            formInfo: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        .card {
            margin: 50px auto;
            width: 50%;
        }
    }
</style>