<template>
    <div class="index-full-screen">
    <div class="main">

    <div class="container">
        <form class="appointment-form" id="appointment-form">
            <h2>carrier registration form</h2>
            <div class="form-group-1">
                <input type="text" name="username" id="username" placeholder="Username" required v-model="regForm.username"/>
                <input type="password" name="password" id="password" placeholder="Password" required v-model="regForm.password"/>
                <input type="text" name="fio" id="fio" placeholder="Full name" required v-model="regForm.fio"/>
                <input type="text" name="name" id="address" placeholder="Address" required v-model="regForm.address"/>
                <input type="text" name="phone" id="phone" placeholder="Phone" required v-model="regForm.phone"/>
                <input type="number" name="phone" id="phone" placeholder="Age" required v-model="regForm.age"/>
                <!-- <input type="text" name="autoModel" id="autoModel" placeholder="Модель" required v-model="regForm.autoModel"/>
                <input type="number" name="autoCapaciryInTons" id="autoCapaciryInTons" placeholder="Вместимость" required v-model="regForm.autoCapaciryInTons"/>
                <input type="text" name="vin" id="vin" placeholder="Vin" required v-model="regForm.autoNumber"/>
                <div class="select-list">
                    <select name="autoType" id="autoType" v-model="regForm.autoType">
                        <option value="" disabled selected style="color: #222;">Тип</option>
                        <option value="TRUCK">Грузовая машина</option>
                        <option value="PASSENGER_CAR">Легковая машина</option>
                    </select>
                </div> -->
            </div>
            <div class="form-check">
                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="./assets/terms.html" class="term-service">Terms and Conditions</a></label>
            </div>
            <div class="form-submit">
                <input @click="signUp" type="button" name="submit" id="submit" class="submit" value="Sign Up" />
            </div>
            <div>
                <label class="label-agree-term">I have already authorized <a @click="$router.push('/sign-in')" class="term-service" style="cursor: pointer;">sign in</a></label>
            </div>
        </form>
    </div>

    </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            baseUrl: "http://localhost:8080",
            regForm: {
                username: "",
                password: "",
                role: "ROLE_CARRIER",
                fio: "",
                address: "",
                phone: "",
                age: null
            }
        }
    },
    methods: {
        signUp() {
            axios
            .post(this.baseUrl + "/sign-up/carrier", 
                this.regForm)
            .then(response => {
                console.log(response.data);
                this.$router.push('/sign-in')
            })
            .catch(error => {
                console.log(error);
                alert("Failed to make registration!")
            });
        }
    }
}
</script>

<style src="../../assets/css/reg.css" scoped></style>

<style scoped>
    .index-full-screen {
        min-width: 100vw;
        min-height: 100vh;
        background:url("../../assets/images/background.jpg");
    }
</style>