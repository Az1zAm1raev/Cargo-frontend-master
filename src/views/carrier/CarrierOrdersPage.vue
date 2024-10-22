<template>
    <div class="wrapper">
        <sidebar activePage="waiting-orders"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <waiting-orders></waiting-orders>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import WaitingOrders from '@/components/WaitingOrders.vue';

export default {
  components: { Sidebar, Navbar, WaitingOrders },
}
</script>

<style src="../../assets/css/bootstrap.min.css" scoped></style>
<style src="../../assets/css/now-ui-dashboard.css" scoped></style>