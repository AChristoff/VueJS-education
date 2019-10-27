<template>
    <form @submit.prevent="onSubmit">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Registration</h1>
                <hr>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input @blur="$v.formInfo.email.$touch"
                           v-model.trim.lazy="formInfo.email"
                           id="email"
                           class="form-control"
                           type="text">
                    <p v-if="!$v.formInfo.email.required && $v.formInfo.email.$dirty" class="alert alert-danger">Email is required </p>
                    <p v-else-if="!$v.formInfo.email.email" class="alert alert-danger">Email is not valid</p>
                    <!---->
                </div>
                <div class="form-group">
                    <label for="password">Password *</label>
                    <input @blur="$v.formInfo.password.$touch"
                           v-model="formInfo.password"
                           id="password"
                           class="form-control"
                           type="password">
                    <p v-if="!$v.formInfo.password.required && $v.formInfo.password.$dirty" class="alert alert-danger">Password is required</p>
                    <p v-else-if="!$v.formInfo.password.hasSpecialChar && $v.formInfo.password.$dirty" class="alert alert-danger">Password must have at least one special character</p>
                    <p v-else-if="!$v.formInfo.password.minLength" class="alert alert-danger">Password must have at least {{ $v.formInfo.password.$params.minLength.min }} characters.</p>
                    <!---->
                </div>
                <div class="form-group">
                    <label for="repeatPass">Repeat Password *</label>
                    <input @blur="$v.formInfo.repeatPass.$touch"
                           v-model="formInfo.repeatPass"
                           id="repeatPass"
                           class="form-control"
                           type="password">
                    <p v-if="!$v.formInfo.repeatPass.required && $v.formInfo.repeatPass.$dirty" class="alert alert-danger">Field is required</p>
                    <p v-else-if="!$v.formInfo.repeatPass.sameAs && $v.formInfo.repeatPass.$dirty" class="alert alert-danger">Passwords do not match!</p>
                    <p v-else-if="$v.formInfo.repeatPass.sameAs && $v.formInfo.repeatPass.$dirty" class="alert alert-success">OK</p>
                    <!---->
                </div>
                <div class="form-group">
                    <label for="age">Age *</label>
                    <input @blur="$v.formInfo.age.$touch"
                           v-model.number="formInfo.age"
                           id="age"
                           class="form-control"
                           type="number">
                    <p v-if="!$v.formInfo.age.required && $v.formInfo.age.$dirty" class="alert alert-danger">Age is required</p>
                    <p v-else-if="!$v.formInfo.age.numeric" class="alert alert-danger">Age must be numeric value</p>
                    <p v-else-if="!$v.formInfo.age.between" class="alert alert-danger">Age must be between {{ $v.formInfo.age.$params.between.min }} and {{ $v.formInfo.age.$params.between.max }} years</p>
                </div>
                <!---->
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="description">Description</label> <br>
                <textarea v-model="formInfo.description" id="description" rows="5" class="form-control"></textarea>
                <!---->`
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="form-group">
                    <h3>Skill Set</h3>
                    <label for="js"></label>
                    <input v-model="formInfo.skills" type="checkbox" id="js" value="JavaScript"> JavaScript
                    <label for="csharp"></label>
                    <input v-model="formInfo.skills" type="checkbox" id="csharp" value="C#"> C#
                    <label for="java"></label>
                    <input v-model="formInfo.skills" type="checkbox" id="java" value="Java"> Java
                    <label for="php"></label>
                    <input v-model="formInfo.skills" type="checkbox" id="php" value="PHP"> PHP
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="male"></label>
                <input v-model="formInfo.gender" name="gender" type="radio" id="male" value="Male"> Male
                <label for="female"></label>
                <input v-model="formInfo.gender" name="gender" type="radio" id="female" value="Female"> Female
            </div>
        
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                <label for="country">Country</label>
                <select v-model="formInfo.selectedCountry"
                        id="country"
                        class="form-control mb-2">
                    <option
                        v-for="country in countries"
                        :key="country.code"
                        :value="country.text">{{country.text}}
                    </option>
                </select>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button class="btn btn-primary btn-lg btn-block mt-5"
                        :disabled="$v.formInfo.$invalid">Submit!
                </button>
            </div>
        </div>
    </form>
</template>

<script>

    import {required, email, numeric, minLength, sameAs, between} from 'vuelidate/lib/validators'


    export default {
        name: "Form",
        data() {
            return {
                formInfo: {
                    email: '',
                    password: '',
                    repeatPass: '',
                    age: '',
                    description: '...',
                    skills: [],
                    gender: '',
                    selectedCountry: '',
                },
                countries: [
                    {code: 'BG', text: 'Bulgaria'},
                    {code: 'DE', text: 'Germany'},
                    {code: 'GB', text: 'England'},
                ],
                // description: '1',
            }
        },
        validations: {
            formInfo: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6),
                    hasSpecialChar: (value) => /(?=.*[!@#$%^&*()_\-+={}[\].,;:"'`|\\/?])/.test(value),
                },
                repeatPass: {
                    required,
                    sameAs: sameAs('password')
                },
                age: {
                    required,
                    numeric,
                    between: between(18, 100)
                },
            },
        },
        methods: {
            onSubmit() {
                this.$emit('form-send', this.formInfo);
            },
            methods: {
                status(validation) {
                    return {
                        error: validation.$error,
                        dirty: validation.$dirty
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>