<template>
    <div class="content">

    <div class="mt-5 mb-3 clearfix">
        <h2 class="pull-left">Free carriers</h2>
    </div>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>Username</th>
            <th>Full name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item, index in users" :key="index" @click="user = item">
            <td>{{ item.username }}</td>
            <td>{{ item.fio }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.address }}</td>
        </tr>
        </tbody>
    </table>
    <div class="card mt-5">
        <div class="card-header">
            <h5 class="title">Binding transport</h5>
        </div>
        <div class="card-body">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="delivary-date" class="text-dark">Username</label>
                            <div id="delivary-date"  type="text" name="address" class="form-control">{{ user.username }}</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="order-type" class="text-dark">Full name</label>
                            <div id="delivary-date"  type="text" name="address" class="form-control">{{ user.fio }}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="volume" class="text-dark">Phone</label>
                            <div id="delivary-date"  type="text" name="address" class="form-control">{{ user.phone }}</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="product-type" class="text-dark">Transport</label>
                            <select id="product-type"  class="form-control" v-model="transportId">
                                <option v-for="item, index in transports" :value="item.id" :key="index">{{ item.model }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <input type="submit" class="btn btn-primary" value="Bind transport" @click="createTransport">
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
            },
            users: [],
            transports: [],
            user: {},
            transportId: null
        }
    },
    methods: {
        createTransport() {
            axios
            .get('http://localhost:8080/carrier-companies/transport/' + this.transportId + '/set/' + this.user.id,
            {
                headers:{
                    Authorization: this.$store.getters.getToken,
                }
            })
            .then(response => {
                console.log(response.data);
                alert("The transport is binded!");
            })
            .catch(error => {
                console.log(error);
                alert("The transport isn't binded!");
            });
        }
    },
    created() {
        axios
        .get('http://localhost:8080/carrier-companies/carrier',
        {
            headers:{
                Authorization: this.$store.getters.getToken,
            }
        })
        .then(response => {
            this.users = response.data;
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });

        axios
        .get('http://localhost:8080/carrier-companies/transport/free',
        {
            headers:{
                Authorization: this.$store.getters.getToken,
            }
        })
        .then(response => {
            this.transports = response.data;
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

}
</script>


<style src="../assets/css/bootstrap.min.css" scoped></style>
<style src="../assets/css/now-ui-dashboard.css" scoped></style>