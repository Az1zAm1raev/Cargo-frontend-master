<template>
    <div class="index-full-screen">
        <div class="card" @click="$router.push('/reg-carrier')">
            <div class="card-image"></div>
            <div class="card-text">
                <h2>Carrier</h2>
                <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
            <div class="card-stats">
                <div class="stat">
                    <div class="value">4<sup>m</sup></div>
                    <div class="type">read</div>
                </div>
                <div class="stat border">
                    <div class="value">5123</div>
                    <div class="type">views</div>
                </div>
                <div class="stat">
                    <div class="value">32</div>
                    <div class="type">comments</div>
                </div>
            </div>
        </div>

        <div class="card" @click="$router.push('/reg-company')">
            <div class="card-image card2"></div>
            <div class="card-text card2">
                <h2>Company owner</h2>
                <p>Adipisicing elit. Ducimus, repudiandae corrupti amet temporibus omnis provident illum maxime quod. Lorem ipsum dolor</p>
            </div>
            <div class="card-stats card2">
                <div class="stat">
                    <div class="value">7<sup>m</sup></div>
                    <div class="type">read</div>
                </div>
                <div class="stat border">
                    <div class="value">7152</div>
                    <div class="type">views</div>
                </div>
                <div class="stat">
                    <div class="value">21</div>
                    <div class="type">comments</div>
                </div>
            </div>
        </div>

        <div class="card" @click="$router.push('/reg-shipper')">
            <div class="card-image card3"></div>
            <div class="card-text card3">
                <h2>Shipper</h2>
                <p>Repudiandae corrupti amet temporibus omnis provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit</p>
            </div>
            <div class="card-stats card3">
                <div class="stat">
                    <div class="value">5<sup>m</sup></div>
                    <div class="type">read</div>
                </div>
                <div class="stat border">
                    <div class="value">3021</div>
                    <div class="type">views</div>
                </div>
                <div class="stat">
                    <div class="value">15</div>
                    <div class="type">comments</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>

    body {
        padding: 0;
        margin: 0;
    }

    .index-full-screen {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background:url("../assets/images/background.jpg");
        overflow: hidden;
    }

    .card {

        display: grid;
        grid-template-columns: 350px;
        grid-template-rows: 350px 250px 80px;
        grid-template-areas: "image" "text" "stats";

        border-radius: 18px;
        background: white;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        font-family: roboto;
        text-align: center;


        transition: 0.5s ease;
        cursor: pointer;
        margin:30px;
    }

    .card-image {
        grid-area: image;
        background: url("../assets/images/carrier.jpg");
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-size: cover;
    }

    .card-text {
        grid-area: text;
        margin: 25px;
    }

    .card-text p {
        color: grey;
        font-size:15px;
        font-weight: 300;
    }
    .card-text h2 {
        margin-top:0px;
        font-size:28px;
        color: black;
    }
    .card-stats {
        grid-area: stats;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background: rgb(255, 7, 110);
    }
    .card-stats .stat {
        padding:10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
    }
    .card-stats .border {
        border-left: 1px solid rgb(172, 26, 87);
        border-right: 1px solid rgb(172, 26, 87);
    }
    .card-stats .value{
        font-size:22px;
        font-weight: 500;
    }
    .card-stats .value sup{
        font-size:12px;
    }
    .card-stats .type{
        font-size:11px;
        font-weight: 300;
        text-transform: uppercase;
    }
    .card:hover {
        transform: scale(1.15);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
    }

    /*card2*/
    .card-image.card2 {
        background: url("../assets/images/broker.jpg");
        background-size: cover;
    }

    .card-stats.card2 .border {
        border-left: 1px solid rgb(185, 67, 20);
        border-right: 1px solid rgb(185, 67, 20);
    }
    .card-stats.card2 {
        background: rgb(255, 77, 7);
    }
    /*card3*/
    .card-image.card3 {
        background: url("../assets/images/shipper.jpg");
        background-size: cover;
    }

    .card-stats.card3 .border {
        border-left: 1px solid rgb(14, 122, 50);
        border-right: 1px solid rgb(14, 122, 50);
    }
    .card-stats.card3 {
        background: rgb(0, 189, 63);
    }

    @media screen and (max-device-width: 1024px) {
        body {
            background: white;
            overflow: auto;
            display: grid;
        }

        .card-text h2 {
            font-size:38px;
        }

        .card-text p {
            font-size: 28px;
        }

        .card{
            grid-template-columns: 800px;
            grid-template-rows: 1024px 250px 150px;
        }

        .card-stats .value{
            font-size:62px;
        }
    }
    @media screen and (max-device-width: 767px) {
        body {
            background: red;
            overflow: auto;
            display: grid;
        }

        .card{
            grid-template-columns: 800px;
            grid-template-rows: 1024px 350px 150px;
        }

        .card-text p {
            font-size: 28px;
        }

        .card-stats .value{
            font-size:62px;
        }
    }
</style>

<style src="../assets/css/reg.css" scoped></style>