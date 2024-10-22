<template>
    <div class="content">
    <div class="card mt-5">
        <div class="card-header">
            <h5 class="title">Create transport</h5>
        </div>
        <div class="card-body">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="delivary-date" class="text-dark">Model</label>
                            <input id="delivary-date"  type="text" name="address" class="form-control" v-model="form.model">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="order-type" class="text-dark">Number</label>
                            <input id="volume"  type="text" name="order-type" class="form-control" v-model="form.number">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="volume" class="text-dark">Capacity in tons</label>
                            <input id="volume"  type="number" name="address" class="form-control" v-model="form.capacityInTons">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="product-type" class="text-dark">Transport type</label>
                            <select id="product-type"  class="form-control" v-model="form.type">
                                <option value="TRUCK">Truck</option>
                                <option value="PASSENGER_CAR">Passenger car</option>
                            </select>
                        </div>
                    </div>
                </div>
                <input type="submit" class="btn btn-primary" value="Create transport" @click="createTransport">
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
            form: {
                model: '',
                number: '',
                capacityInTons: null,
                type: ''
            }
        }
    },
    methods: {
        createTransport() {
            axios
            .post('http://localhost:8080/carrier-companies/transport', [this.form],
            {
                headers:{
                    Authorization: this.$store.getters.getToken,
                }
            })
            .then(response => {
                console.log(response.data);
                alert("The transport is added!");
            })
            .catch(error => {
                console.log(error);
                alert("The transport isn't added!");
            });
        }
    }

}
</script>


<style src="../assets/css/bootstrap.min.css" scoped></style>
<style src="../assets/css/now-ui-dashboard.css" scoped></style>