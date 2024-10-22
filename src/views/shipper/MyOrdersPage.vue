<template>
    <div class="wrapper">
        <sidebar activePage="my-orders"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <my-orders></my-orders>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import MyOrders from '@/components/MyOrders.vue';

export default {
  components: { Sidebar, Navbar, MyOrders },
}
</script>

<style src="../../assets/css/bootstrap.min.css" scoped></style>
<style src="../../assets/css/now-ui-dashboard.css" scoped></style>