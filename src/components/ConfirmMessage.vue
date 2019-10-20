<template>
    
    <div class="card">
        <div class="card-header">
            <h4>Your Data</h4>
        </div>
        <div class="card-body">
            <p>Mail: {{email}}</p>
            <p>Password: {{password}}</p>
            <p>Age: {{age}}</p>
            <p>Description: {{description}}</p>
            <p><strong>Skill Set?</strong></p>
            <ul>
                <li v-for="(skill, index) in skills" :key="index">{{skill}}</li>
            </ul>
            <p>Gender: {{gender}}</p>
            <p>Country: {{selectedCountry}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConfirmMessage",
        props: {
            email: {
                type: String
            },
            password: {
                type: String
            },
            age: {
                type: Number
            },
            description: {
                type: String
            },
            skills: {
                type: Array
            },
            gender: {
                type: String
            },
            selectedCountry: {
                type: String
            },
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