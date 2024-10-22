<template>
    <div class="wrapper">
        <sidebar activePage="broker-orders"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <broker-orders></broker-orders>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import BrokerOrders from '@/components/BrokerOrders.vue';

export default {
  components: { Sidebar, Navbar, BrokerOrders },
}
</script>

<style src="../../assets/css/bootstrap.min.css" scoped></style>
<style src="../../assets/css/now-ui-dashboard.css" scoped></style>