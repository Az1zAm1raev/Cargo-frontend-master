<template>
    <div class="content">
        <div class="col-md-12">
            <div class="mt-5 mb-3 clearfix">
                <h2 class="pull-left">Orders</h2>
            </div>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Created date</th>
                    <th>Order type</th>
                    <th>Price</th>
                    <th>Volume</th>
                    <th>Source address</th>
                    <th>Destination address</th>
                    <th>Product Type</th>
                    <th>Total km</th>
                    <th>Duration</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item, index in orders" :key="index" @click="orderClicked(item)">
                    <td>{{ item.createdDate }}</td>
                    <td>{{ item.orderType }}</td>
                    <td>{{ item.price == null ? 'Not accepted':item.price }}</td>
                    <td>{{ item.volume }}</td>
                    <td>{{ item.sourceAddress.address }}</td>
                    <td>{{ item.destinationAddress.address }}</td>
                    <td>{{ item.productType.name }}</td>
                    <td>{{ item.totalKm }}</td>
                    <td>{{ item.duration }}</td>
                </tr>
                </tbody>
            </table>

            <div id="map" style="width:100%; height:100vh"></div>

            <div class="card mt-5" v-if="flag">
                <div class="card-body">
                    
                    <div class="card-header">
                        <h5 class="title">Order</h5>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="delivary-date" class="text-dark">Estimated delivery date</label>
                                    <div class="form-control">{{ checkedOrder.estimatedDeliveryDate }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="order-type" class="text-dark">Order type</label>
                                    <div class="form-control">{{ checkedOrder.orderType }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Volume</label>
                                    <div class="form-control">{{ checkedOrder.volume }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">Product type</label>
                                    <div class="form-control">{{ checkedOrder.productType.name }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Created date</label>
                                    <div class="form-control">{{ checkedOrder.createdDate }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">Total km</label>
                                    <div class="form-control">{{ checkedOrder.totalKm }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-header">
                            <h5 class="title">Source address</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">State</label>
                                    <div class="form-control">{{ checkedOrder.sourceAddress.state }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">City</label>
                                    <div class="form-control">{{ checkedOrder.sourceAddress.city }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Address</label>
                                    <div class="form-control">{{ checkedOrder.sourceAddress.address }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="card-header">
                            <h5 class="title">Destination address</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">State</label>
                                    <div class="form-control">{{ checkedOrder.destinationAddress.state }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">City</label>
                                    <div class="form-control">{{ checkedOrder.destinationAddress.city }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Address</label>
                                    <div class="form-control">{{ checkedOrder.destinationAddress.address }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-header" v-if="(checkedOrder.status == 'TAKEN') | (checkedOrder.status == 'CONFIRMED')">
                            <h5 class="title">Price information</h5>
                        </div>
                        <div class="row" v-if="(checkedOrder.status == 'TAKEN') | (checkedOrder.status == 'CONFIRMED')">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Total price for volume</label>
                                    <div class="form-control">{{ priceInformation.totalVolumePrice }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">Tariff for volume</label>
                                    <div class="form-control">{{ priceInformation.tariffForVolume }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="(checkedOrder.status == 'TAKEN') | (checkedOrder.status == 'CONFIRMED')">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Total price for distance</label>
                                    <div class="form-control">{{ priceInformation.totalDistancePrice }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">Tariff for distance</label>
                                    <div class="form-control">{{ priceInformation.tariffForDistance }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="(checkedOrder.status == 'TAKEN') | (checkedOrder.status == 'CONFIRMED')">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Total by order type</label>
                                    <div class="form-control">{{ priceInformation.totalByOrderType }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">Percent by order type</label>
                                    <div class="form-control">{{ priceInformation.percentByOrderType }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="(checkedOrder.status == 'TAKEN') | (checkedOrder.status == 'CONFIRMED')">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Duration</label>
                                    <div class="form-control">{{ priceInformation.hours + " hours " + priceInformation.minutes + " minutes" }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">Total price</label>
                                    <div class="form-control">{{ priceInformation.total }}</div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" class="btn btn-success" value="Accept" v-if="checkedOrder.status == 'CONFIRMED'" @click="confirm">
                        <input type="submit" class="btn btn-primary" value="Reject" v-if="checkedOrder.status == 'CONFIRMED'" @click="decline">
                    </div>
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
            orders: [],
            
            checkedOrder: {
                shipper: {
                    fio: '',
                    age: '',
                    phone: '',
                    address: ''
                },
                productType: {
                    name: ''
                },
                sourceAddress: {

                },
                destinationAddress: {

                }
            },
            map: null,
            lon: -96,
            lat: 35,
            zoom: 3,
            loc: null,
            routingLayer: null,
            flag: false,
            price: 0,
            priceInformation: {}
        }
    },
    methods: {
        orderClicked(item) {
            this.checkedOrder = item;
            this.flag = true;
            if ((item.status == "TAKEN") | (item.status == "CONFIRMED")) {
                axios
                .get('http://localhost:8080/orders/' + item.id + '/price-info',
                {
                    headers:{
                        Authorization: this.$store.getters.getToken,
                    }
                })
                .then(response => {
                    this.priceInformation = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            }

            this.routingLayer.removeRoute("sourcetodestination");
            var stops = [
                new ALKMaps.LonLat(item.sourceAddress.longitude, item.sourceAddress.latitude),
                new ALKMaps.LonLat(item.destinationAddress.longitude, item.destinationAddress.latitude)
            ];
            stops = ALKMaps.LonLat.transformArray(stops, new ALKMaps.Projection("EPSG:4326"), this.map.getProjectionObject());
            this.routingLayer.addRoute({
            stops: stops,
            functionOptions:{
                routeId: "sourcetodestination"
            },
            routeOptions: {
                highwayOnly: false,
                tollDiscourage: true
            }
            });
        },

        confirm() {
            axios
            .get('http://localhost:8080/brokers/order/' + this.checkedOrder.id + '/accept',
            {
                headers:{
                    Authorization: this.$store.getters.getToken,
                }
            })
            .then(response => {
                console.log(response.data);
                alert("Order confirmed!")
            })
            .catch(error => {
                console.log(error);
            });
        },

        decline() {
            axios
            .get('http://localhost:8080/brokers/order/' + this.checkedOrder.id + '/reject',
            {
                headers:{
                    Authorization: this.$store.getters.getToken,
                }
            })
            .then(response => {
                console.log(response.data);
                alert("Order declined!")

            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    
    created() {
        axios
        .get('http://localhost:8080/brokers/order',
        {
            headers:{
                Authorization: this.$store.getters.getToken,
            }
        })
        .then(response => {
            this.orders = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    },
    mounted() {
        ALKMaps.APIKey = "F3E88AAB5C168D4B9A0267114D813AE9";
        this.map = new ALKMaps.Map("map");
        var lonLat = new ALKMaps.LonLat(this.lon, this.lat).transform(
          new ALKMaps.Projection("EPSG:4326"),
          this.map.getProjectionObject()
        );
        this.map.setCenter(lonLat, this.zoom);

        this.loc = new ALKMaps.Control.Geolocate();
        this.map.addControl(this.loc);

        
        this.routingLayer = new ALKMaps.Layer.Routing( "Route Layer" );
        this.map.addLayer(this.routingLayer);
    }
}
</script>

<style src="../assets/css/bootstrap.min.css" scoped></style>
<style src="../assets/css/now-ui-dashboard.css" scoped></style>