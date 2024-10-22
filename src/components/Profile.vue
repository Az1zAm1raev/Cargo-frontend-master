<template>
    <div class="content">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h5 class="title">My Profile</h5>
                    </div>
                    <div class="card-body">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-4 pr-1">
                                    <div class="form-group">
                                        <label class="text-dark">Username</label>
                                        <div type="email" name="mail" class="form-control">{{ $store.getters.getUsername }}</div>
                                    </div>
                                </div>
                                <div class="col-md-8 pr-1">
                                    <div class="form-group">
                                        <label class="text-dark">Full name</label>
                                        <div type="text" name="name" class="form-control">{{ $store.getters.getFio }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="text-dark">Address</label>
                                        <div type="text" name="address" class="form-control">{{ $store.getters.getAddress }}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="text-dark">Phone</label>
                                        <div type="text" name="number" class="form-control">{{ $store.getters.getPhone }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-user">
                    <div class="image">
                        <img src="" alt="">
                    </div>
                    <div>
                        <div class="author">
                            <img class="avatar border-gray" src="../assets/images/broker.jpg" alt="..." >
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="card mt-5" v-if="$store.getters.getRole == 'ROLE_COMPANY_OWNER'">
            <div class="card-header">
                <h5 class="title">Update price info</h5>
            </div>
            <div class="card-body">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="delivary-date" class="text-dark">Price per Lb</label>
                                <input id="delivary-date"  type="number" name="address" class="form-control" v-model="priceInfo.pricePerLb">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="order-type" class="text-dark">Price per km</label>
                                <input id="order-type"  type="number" name="address" class="form-control" v-model="priceInfo.pricePerKm">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="volume" class="text-dark">Percent to express</label>
                                <input id="volume"  type="number" name="address" class="form-control" v-model="priceInfo.percentToExpress" min="0" max="100">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="product-type" class="text-dark">Percent to standard</label>
                                <input id="product-type"  type="number" name="address" class="form-control" v-model="priceInfo.percentToStandard" min="0" max="100">
                            </div>
                        </div>
                    </div>
                    <input type="submit" class="btn btn-primary" value="Update" @click="update">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    
    data() {
        return {
            priceInfo: {
                pricePerLb: null,
                pricePerKm: null,
                percentToExpress: null,
                percentToStandard: null
            }
        }
    },
    methods: {
        update() {
            axios
            .post('http://localhost:8080/carrier-companies/update-price-info', this.priceInfo,
            {
                headers:{
                    Authorization: this.$store.getters.getToken,
                }
            })
            .then(response => {
                console.log(response.data);
                alert("The prices is updated!");
            })
            .catch(error => {
                console.log(error);
                alert("The prices isn't updated!");
            });
        }
    }

}
</script>


<style src="../assets/css/bootstrap.min.css" scoped></style>
<style src="../assets/css/now-ui-dashboard.css" scoped></style>