<template>
    <div id="map" style="width:100%; height:100vh"></div>
    <button @click="getMile()">Get miles</button>
    <button @click="getMyLocation()">Get location</button>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            map: null,
            lon: -96,
            lat: 35,
            zoom: 3,
            loc: null
        }
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

        var routingLayer = new ALKMaps.Layer.Routing( "Route Layer" );
        this.map.addLayer(routingLayer);
        var stops = [
            new ALKMaps.LonLat(-75.173297, 39.942892),
            new ALKMaps.LonLat(-74.438942, 39.362469)
        ];
        stops = ALKMaps.LonLat.transformArray(stops, new ALKMaps.Projection("EPSG:4326"), this.map.getProjectionObject());
        routingLayer.addRoute({
        stops: stops,
        functionOptions:{
            routeId: "PhiladelphiaToAtlanticCity"
        },
        routeOptions: {
            highwayOnly: false,
            tollDiscourage: true
        }
        });
    },
    methods: {
        getMile() {
            var stops = [
                new ALKMaps.LonLat(-75.173297, 39.942892),
                new ALKMaps.LonLat(-74.438942, 39.362469)
            ]; 
            axios
            .get('https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/route/routeReports?stops=-75.173297%2C%2039.942892%3B-74.773297%2C%2038.943892%3B-74.438942%2C%2039.362469&reports=Mileage&vehType=Truck',
            {
                headers:{
                    Authorization: 'F3E88AAB5C168D4B9A0267114D813AE9',
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },

        getMyLocation() {
            console.log(this.loc);
        }
    }
}
</script>