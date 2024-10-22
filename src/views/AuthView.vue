<template>
    <div class="index-full-screen">

    <div class="main">

    <div class="container">
        <form class="appointment-form" id="appointment-form">
            <h2>authorization form</h2>
            <div class="form-group-1">
                <input type="text" name="username" id="username" placeholder="Username" required v-model="authForm.username"/>
                <input type="password" name="password" id="password" placeholder="Password" required v-model="authForm.password"/>
            </div>
            <div class="form-check">
            </div>
            <div class="form-submit">
                <input type="button" name="submit" id="submit" class="submit" value="Sign In" @click="signIn"/>
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
            authForm: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        signIn() {
            
            
            axios
            .post(this.baseUrl + "/sign-in", this.authForm)
            .then(resp => {
                if (resp.status == 200) {
                    this.$store.commit("setCredentials", {
                        token: resp.data.token,
                    });
                    sessionStorage.setItem("token", resp.data.token);
                    console.log(this.$store.getters.getToken);
                    
                    axios
                    .get(this.baseUrl + "/profile",
                    {
                        headers:{
                            Authorization: this.$store.getters.getToken,
                        }
                    })
                    .then(resp => {
                        this.$store.commit("setCredentials", {
                            username: resp.data.username,
                            fio: resp.data.fio,
                            address: resp.data.address,
                            phone: resp.data.phone,
                            role: resp.data.role,
                            id: resp.data.id
                        }); 
                        sessionStorage.setItem("username", resp.data.username);
                        sessionStorage.setItem("fio", resp.data.fio);
                        sessionStorage.setItem("address", resp.data.address);
                        sessionStorage.setItem("phone", resp.data.phone);
                        sessionStorage.setItem("role", resp.data.role);
                        sessionStorage.setItem("id", resp.data.id);
                        if (this.$store.getters.getRole == "ROLE_CARRIER") {
                            this.$router.push("/carrier/orders");
                        } else if (this.$store.getters.getRole == "ROLE_SHIPPER") {
                            this.$router.push("/shipper/make-order");
                        } else if (this.$store.getters.getRole == "ROLE_COMPANY_OWNER") {
                            this.$router.push("/company/traffic-create");
                        } else if (this.$store.getters.getRole == "ROLE_BROKER") {
                            this.$router.push("/broker/orders");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        alert("Wrong password!");
                    });
                }
            })
            .catch (error => {
                console.log(error);
            });
        }
    }
}
</script>

<style src="../assets/css/reg.css" scoped></style>

<style scoped>
    .index-full-screen {
        min-width: 100vw;
        min-height: 100vh;
        background:url("../assets/images/background.jpg");
    }
</style>