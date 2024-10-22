<template>
    <div class="content">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="title">Source</h5>
                        </div>

                        <div class="card-body">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="s-address" class="text-dark">Country</label>
                                            <input id="s-address"  type="text" name="address" class="form-control" v-model="sourceCountry">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="s-state" class="text-dark">State</label>
                                            <input id="s-state"  type="text" name="number" class="form-control" v-model="orderForm.sourceState">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="s-city" class="text-dark">City</label>
                                            <input id="s-city"  type="text" name="address" class="form-control" v-model="orderForm.sourceCity">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="s-country" class="text-dark">Street</label>
                                            <input id="s-country"  type="text" name="number" class="form-control" v-model="orderForm.sourceAddress">
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" class="btn btn-primary" value="Put start point"  @click="findFirtPoint">
                                <input type="submit" class="btn btn-primary" id="delete-start-point" value="Delete start point" @click="deleteStart">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="title">Destination</h5>
                        </div>
                        <div class="card-body">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="d-address" class="text-dark">Country</label>
                                            <input id="d-address"  type="text" name="address" class="form-control" v-model="destinationCountry">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="d-state" class="text-dark">State</label>
                                            <input id="d-state"  type="text" name="number" class="form-control" v-model="orderForm.destinationState">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="d-city" class="text-dark">City</label>
                                            <input id="d-city"  type="text" name="address" class="form-control" v-model="orderForm.destinationCity">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="d-country" class="text-dark">Street</label>
                                            <input id="d-country"  type="text" name="number" class="form-control" v-model="orderForm.destinationAddress">
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" class="btn btn-primary" value="Put end point" @click="findEndPoint">
                                <input type="submit" class="btn btn-primary" id="delete-end-point" value="Delete end point" @click="deleteEnd" >
                                <input type="submit" class="btn btn-primary" id="take-route" value="Take a route">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="map" style="width:100%; height:100vh"></div>

            <div class="card mt-5">
                <div class="card-body">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="delivary-date" class="text-dark">Estimated delivery date</label>
                                    <input id="delivary-date"  type="datetime-local" name="address" class="form-control" v-model="orderForm.estimatedDeliveryDate">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="order-type" class="text-dark">Order type</label>
                                    <select id="order-type"  class="form-control" v-model="orderForm.orderType">
                                        <option value="EXPRESS">Express</option>
                                        <option value="STANDARD">Standard</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="volume" class="text-dark">Volume</label>
                                    <input id="volume"  type="number" name="address" class="form-control" v-model="orderForm.volume">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="product-type" class="text-dark">Product type</label>
                                    <select id="product-type"  class="form-control" v-model="orderForm.productType">
                                        <option :value="item.name" v-for="item, index in productTypes" :key="index">{{item.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Make order" @click="makeOrder">
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
            startPointForm: {},
            startPoint: {},
            endPoint: {},
            routeForm: {},
            orderForm: {
                shipperId: null,
                sourceCity: "",
                sourceState: "",
                sourceAddress: "",
                sourceLatitude: null,
                sourceLongitude: null,
                destinationCity: "",
                destinationState: "",
                destinationAddress: "",
                destinationLongitude: null,
                destinationLatitude: null,
                volume: null,
                productType: "",
                orderType: "",
                totalKm: null,
                duration: "",
                estimatedDeliveryDate: ""
            },
            sourceCountry: "",
            destinationCountry: "",
            productTypes: []
        }
    },
    methods: {
        startPointCall() {
            this.sourceCountry = this.startPoint.Address.Country;
            this.orderForm.sourceState = this.startPoint.Address.StateName;
            this.orderForm.sourceCity = this.startPoint.Address.City;
            this.orderForm.sourceAddress = this.startPoint.Address.StreetAddress
            this.orderForm.sourceLongitude = this.startPoint.Coords.Lon;
            this.orderForm.sourceLatitude = this.startPoint.Coords.Lat;
        },
        endPointCall() {
            this.destinationCountry = this.endPoint.Address.Country;
            this.orderForm.destinationState = this.endPoint.Address.StateName;
            this.orderForm.destinationCity = this.endPoint.Address.City;
            this.orderForm.destinationAddress = this.endPoint.Address.StreetAddress
            this.orderForm.destinationLongitude = this.endPoint.Coords.Lon;
            this.orderForm.destinationLatitude = this.endPoint.Coords.Lat;
        },
        deleteStart() {
            this.sourceCountry = "";
            this.orderForm.sourceState = "";
            this.orderForm.sourceCity = "";
            this.orderForm.sourceAddress = "";
            this.orderForm.sourceLongitude = null;
            this.orderForm.sourceLatitude = null;
        },
        deleteEnd() {
            this.destinationCountry = "";
            this.orderForm.destinationState = "";
            this.orderForm.destinationCity = "";
            this.orderForm.destinationAddress = "";
            this.orderForm.destinationLongitude = null;
            this.orderForm.destinationLatitude = null;
        },
        routeCall() {
            this.orderForm.totalKm = this.routeForm.TMiles * 1.60934;
            this.orderForm.duration = this.routeForm.THours;
        },
        findFirtPoint() {
            axios
                .get('https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations?&state=' + this.orderForm.sourceState + '&street=' + this.orderForm.sourceAddress + '&city=' + this.orderForm.sourceCity + '&country=' + this.sourceCountry + '&dataset=Current',
                {
                    headers:{
                        Authorization: 'F3E88AAB5C168D4B9A0267114D813AE9',
                    }
                })
                .then(response => {
                    this.startPoint = response.data[0];
                    this.startPointCall();
                    console.log(response.data);
                    alert("The start point was found successfully!");
                })
                .catch(error => {
                    console.log(error);
                    alert("The start point wasn't found!");
                });
        },
        findEndPoint() {
            axios
                .get('https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations?&state=' + this.orderForm.destinationState + '&street=' + this.orderForm.destinationAddress + '&city=' + this.orderForm.destinationCity + '&country=' + this.destinationCountry + '&dataset=Current',
                {
                    headers:{
                        Authorization: 'F3E88AAB5C168D4B9A0267114D813AE9',
                    }
                })
                .then(response => {
                    this.endPoint = response.data[0];
                    this.endPointCall();
                    console.log(response.data);
                    alert("The end point was found successfully!");
                })
                .catch(error => {
                    console.log(error);
                    alert("The end point wasn't found!");
                });
        },
        makeOrder() {
            axios
            .post('http://localhost:8080/orders', this.orderForm,
            {
                headers:{
                    Authorization: this.$store.getters.getToken,
                }
            })
            .then(response => {
                console.log(response.data);
                alert("The order is made!");
            })
            .catch(error => {
                console.log(error);
                alert("The order isn't made! Check may be you entered something wrong!");
            });
        }
    },
    mounted() {
        this.orderForm.shipperId = this.$store.getters.getId;
        ALKMaps.APIKey = "F3E88AAB5C168D4B9A0267114D813AE9";

        var vm = this;

        var startPointBtn = document.querySelector('#delete-start-point');
        var endPointBtn = document.querySelector('#delete-end-point');
        var takeRouteBtn = document.querySelector('#take-route');

        var startCheck = false;
        var endCheck = false;
        
        var map = new ALKMaps.Map("map");
        var base = new ALKMaps.Layer.BaseMap("Base Map", {}, {});
        var markerLayer = new ALKMaps.Layer.Markers("Markers");
        map.addLayers([base, markerLayer]);

        var contextMenu = new ALKMaps.Control.ContextMenu({
            ctxMenuItems: [
            {
                separator: false,
                text: "Put start point",
                onclick: function (e) {
                addStartMarker(e);
                }
            },
            {
                separator: false,
                text: "Put end point",
                onclick: function (e) {
                addEndMarker(e);
                }
            },
            { separator: true },
            {
                separator: false,
                text: "Zoom In",
                onclick: function (e) {
                map.zoomIn();
                }
            },
            {
                separator: false,
                text: "Zoom Out",
                onclick: function (e) {
                map.zoomOut();
                }
            }
            ]
        });

        map.addControl(contextMenu);
        var center = new ALKMaps.LonLat(-84.438942, 39.362469).transform(
            new ALKMaps.Projection("EPSG:4326"),
            map.getProjectionObject()
        ); //transform to mercator
        map.setCenter(center, 5);

        var marker1;
        var marker2;

        
        var loc = new ALKMaps.Control.Geolocate();
        map.addControl(loc);
        console.log("Geo");

        function addStartMarker(e) {
            console.log(loc);

            if (!startCheck) {
                var lonlat = map.getLonLatFromViewPortPx(e.xy);
                console.log(lonlat);
                var iconFav = new ALKMaps.Icon(
                ALKMaps.IMAGE.TRUCK_GREEN,
                new ALKMaps.Size(30, 30)
                );
                marker1 = new ALKMaps.Marker(
                lonlat,
                iconFav.clone(),
                "Source stop",
                { map: map, mouseOver: true }
                );
                startCheck = true;
                markerLayer.addMarker(marker1);
                var lonLat = map.getLonLatFromViewPortPx(e.xy).
                             transform(map.getProjectionObject(), new ALKMaps.Projection("EPSG:4326"));
                axios
                .get('https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations/reverse?Coords=' + lonLat.lon + '%2C' + lonLat.lat + '&matchNamedRoadsOnly=true&maxCleanupMiles=20&region=NA&dataset=Current&includeTrimblePlaceIds=true',
                {
                    headers:{
                        Authorization: 'F3E88AAB5C168D4B9A0267114D813AE9',
                    }
                })
                .then(response => {
                    console.log(response.data);
                    vm.startPoint = response.data;
                    vm.startPointCall();
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                markerLayer.removeMarker(marker1);
                var lonlat = map.getLonLatFromViewPortPx(e.xy);
                var iconFav = new ALKMaps.Icon(
                ALKMaps.IMAGE.TRUCK_GREEN,
                new ALKMaps.Size(30, 30)
                );
                marker1 = new ALKMaps.Marker(
                lonlat,
                iconFav.clone(),
                "Source stop",
                { map: map, mouseOver: true }
                );
                markerLayer.addMarker(marker1);
                startCheck = true;
                var lonLat = map.getLonLatFromViewPortPx(e.xy).
                             transform(map.getProjectionObject(), new ALKMaps.Projection("EPSG:4326"));
                axios
                .get('https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations/reverse?Coords=' + lonLat.lon + '%2C' + lonLat.lat + '&matchNamedRoadsOnly=true&maxCleanupMiles=20&region=NA&dataset=Current&includeTrimblePlaceIds=true',
                {
                    headers:{
                        Authorization: 'F3E88AAB5C168D4B9A0267114D813AE9',
                    }
                })
                .then(response => {
                    console.log(response.data);
                    vm.startPoint = response.data;
                    vm.startPointCall();

                })
                .catch(error => {
                    console.log(error);
                });
            }
        }

        function addEndMarker(e) {
            if (!endCheck) {
                var lonlat = map.getLonLatFromViewPortPx(e.xy);
                var iconFav = new ALKMaps.Icon(
                ALKMaps.IMAGE.FAVORITE,
                new ALKMaps.Size(30, 30)
                );
                marker2 = new ALKMaps.Marker(
                lonlat,
                iconFav.clone(),
                "Source stop",
                { map: map, mouseOver: true }
                );
                markerLayer.addMarker(marker2);
                console.log(lonlat.lon);
                endCheck = true;
                var lonLat = map.getLonLatFromViewPortPx(e.xy).
                             transform(map.getProjectionObject(), new ALKMaps.Projection("EPSG:4326"));
                axios
                .get('https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations/reverse?Coords=' + lonLat.lon + '%2C' + lonLat.lat + '&matchNamedRoadsOnly=true&maxCleanupMiles=20&region=NA&dataset=Current&includeTrimblePlaceIds=true',
                {
                    headers:{
                        Authorization: 'F3E88AAB5C168D4B9A0267114D813AE9',
                    }
                })
                .then(response => {
                    console.log(response.data);
                    vm.endPoint = response.data;
                    vm.endPointCall();

                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                markerLayer.removeMarker(marker2);
                var lonlat = map.getLonLatFromViewPortPx(e.xy);
                var iconFav = new ALKMaps.Icon(
                ALKMaps.IMAGE.FAVORITE,
                new ALKMaps.Size(30, 30)
                );
                marker2 = new ALKMaps.Marker(
                lonlat,
                iconFav.clone(),
                "Source stop",
                { map: map, mouseOver: true }
                );
                markerLayer.addMarker(marker2);
                console.log(lonlat.lon);
                endCheck = true;
                var lonLat = map.getLonLatFromViewPortPx(e.xy).
                             transform(map.getProjectionObject(), new ALKMaps.Projection("EPSG:4326"));
                axios
                .get('https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations/reverse?Coords=' + lonLat.lon + '%2C' + lonLat.lat + '&matchNamedRoadsOnly=true&maxCleanupMiles=20&region=NA&dataset=Current&includeTrimblePlaceIds=true',
                {
                    headers:{
                        Authorization: 'F3E88AAB5C168D4B9A0267114D813AE9',
                    }
                })
                .then(response => {
                    console.log(response.data);
                    vm.endPoint = response.data;
                    vm.endPointCall();

                })
                .catch(error => {
                    console.log(error);
                });
            }
        }

        startPointBtn.addEventListener("click", e => {
            if (startCheck) {
                markerLayer.removeMarker(marker1);
                startCheck = false;
            } else {
                alert("You have not put start point")
            }
        });

        endPointBtn.addEventListener("click", e => {
            if (endCheck) {
                markerLayer.removeMarker(marker2);
                endCheck = false;
            } else {
                alert("You have not put end point")
            }
        });

        var routingLayer = new ALKMaps.Layer.Routing("Route Layer");
        map.addLayer(routingLayer);
        takeRouteBtn.addEventListener("click", e => {
            if (startCheck & endCheck) {
                markerLayer.removeMarker(marker1);
                markerLayer.removeMarker(marker2);
                routingLayer.removeRoute("sourcetodestination");
                var stops = [
                    new ALKMaps.LonLat(vm.orderForm.sourceLongitude, vm.orderForm.sourceLatitude),
                    new ALKMaps.LonLat(vm.orderForm.destinationLongitude, vm.orderForm.destinationLatitude)
                ];
                stops = ALKMaps.LonLat.transformArray(stops, new ALKMaps.Projection("EPSG:4326"), map.getProjectionObject());
                var route = {
                    stops: stops,
                    functionOptions:{
                        routeId: "sourcetodestination"
                    },
                    routeOptions: {
                        highwayOnly: false,
                        tollDiscourage: true
                    }
                };
                routingLayer.addRoute(route);
                axios
                .get('https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/route/routeReports?stops=' + vm.orderForm.sourceLongitude + '%2C%20' + vm.orderForm.sourceLatitude + '%3B' + vm.orderForm.destinationLongitude + '%2C%20' + vm.orderForm.destinationLatitude + '&reports=Mileage&vehType=Truck',
                {
                    headers:{
                        Authorization: 'F3E88AAB5C168D4B9A0267114D813AE9',
                    }
                })
                .then(response => {
                    console.log(response.data);
                    vm.routeForm = response.data[0].ReportLines[1];
                    vm.routeCall();
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                alert("Please select source and destination points!");
            }
            
        });
    },
    created() {
        axios
        .get('http://localhost:8080/product-types',
        {
            headers:{
                Authorization: this.$store.getters.getToken,
            }
        })
        .then(response => {
            console.log(response.data);
            this.productTypes = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    },
}
</script>


<style src="../assets/css/bootstrap.min.css" scoped></style>
<style src="../assets/css/now-ui-dashboard.css" scoped></style>