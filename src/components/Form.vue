<template>
    <form @submit.prevent="onSubmit">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Registration</h1>
                <hr>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model.lazy.trim="email" type="email" id="email" class="form-control">
                    <!---->
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model.lazy="password" type="password" id="password" class="form-control">
                    <!---->
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input v-model.number="age" type="number" id="age" class="form-control"></div>
                <!---->
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="description">Description</label> <br>
                <textarea v-model="description" id="description" rows="5" class="form-control"></textarea>
                <!---->
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="form-group">
                    <h3>Skill Set</h3>
                    <label for="js"></label>
                    <input v-model="skills" type="checkbox" id="js" value="JavaScript"> JavaScript
                    <label for="csharp"></label>
                    <input v-model="skills" type="checkbox" id="csharp" value="C#"> C#
                    <label for="java"></label>
                    <input v-model="skills" type="checkbox" id="java" value="Java"> Java
                    <label for="php"></label>
                    <input v-model="skills" type="checkbox" id="php" value="PHP"> PHP
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="male"></label>
                <input v-model="gender" name="gender" type="radio" id="male" value="Male"> Male
                <label for="female"></label>
                <input v-model="gender" name="gender" type="radio" id="female" value="Female"> Female
            </div>
        
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                <label for="country">Country</label>
                <select v-model="selectedCountry"
                        id="country"
                        class="form-control">
                    <option
                        v-for="country in countries"
                        :key="country.id"
                        :value="country.id">{{country.text}}
                    </option>
                </select>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button class="btn btn-primary">Submit!</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Form",
        data() {
            return {
                email: 'example@email.com',
                description: 'description',
                password: 'password',
                age: 18,
                disabled: false,
                skills: [],
                gender: '',
                selectedCountry: '',
                countries: [
                    {id: 'BG', text: 'Bulgaria'},
                    {id: 'DE', text: 'Germany'},
                    {id: 'GB', text: 'England'},
                ]
            }
        },
        methods: {
            onSubmit() {
                this.$emit('form-send', {
                    email: this.email,
                    description: this.description,
                    password: this.password,
                    age: this.age,
                    skills: this.skills,
                    gender: this.gender,
                    selectedCountry: this.selectedCountry,
                    countries: this.countries,
                });
            }
        }
    }
</script>

<style scoped>

</style>