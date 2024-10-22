<template>
    <div class="sidebar" data-color="orange">
        <div class="logo">
            <a class="simple-text logo-normal text-center" style="cursor: pointer;">
                Home
            </a>
        </div>
        <div class="sidebar-wrapper" id="sidebar-wrapper">
            <ul class="nav">
                <li class="text-center" :class="activePage == 'make-order' ? 'active':''" v-if="$store.getters.getRole == 'ROLE_SHIPPER'">
                    <a style="cursor: pointer;" @click="$router.push('/shipper/make-order')">
                        <p>Make Order</p>
                    </a>
                </li>
                <li class="text-center" :class="activePage == 'my-orders' ? 'active':''" v-if="$store.getters.getRole == 'ROLE_SHIPPER'">
                    <a style="cursor: pointer;" @click="$router.push('/shipper/my-orders')">
                        <p>My orders</p>
                    </a>
                </li>

                
                <li class="text-center" :class="activePage == 'waiting-orders' ? 'active':''" v-if="$store.getters.getRole == 'ROLE_CARRIER'">
                    <a style="cursor: pointer;" @click="$router.push('/carrier/orders')">
                        <p>Orders</p>
                    </a>
                </li>

                
                <li class="text-center" :class="activePage == 'traffic-create' ? 'active':''" v-if="$store.getters.getRole == 'ROLE_COMPANY_OWNER'">
                    <a style="cursor: pointer;" @click="$router.push('/company/traffic-create')">
                        <p>Transport creating</p>
                    </a>
                </li>
                <li class="text-center" :class="activePage == 'traffic-binding' ? 'active':''" v-if="$store.getters.getRole == 'ROLE_COMPANY_OWNER'">
                    <a style="cursor: pointer;" @click="$router.push('/company/traffic-binding')">
                        <p>Transport binding</p>
                    </a>
                </li>


                <li class="text-center" :class="activePage == 'broker-orders' ? 'active':''" v-if="$store.getters.getRole == 'ROLE_BROKER'">
                    <a style="cursor: pointer;" @click="$router.push('/broker/orders')">
                        <p>Orders</p>
                    </a>
                </li>


                
                <li class="text-center" :class="activePage == 'profile' ? 'active':''">
                    <a style="cursor: pointer;" @click="$router.push('/user-profile')">
                        <p>Profile</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    props: {
        activePage: String
    },
    mounted() {
        console.log(this.$store.getters.getRole)
    }
}
</script>

<style src="../assets/css/now-ui-dashboard.css" scoped></style>
<style src="../assets/css/bootstrap.min.css" scoped></style>
