<template>
    <div class="wrapper">
        <sidebar activePage="waiting-orders"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <accepted-orders></accepted-orders>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import AcceptedOrders from '@/components/AcceptedOrders.vue';

export default {
  components: { Sidebar, Navbar, AcceptedOrders },
}
</script>

<style src="../../assets/css/bootstrap.min.css" scoped></style>
<style src="../../assets/css/now-ui-dashboard.css" scoped></style>