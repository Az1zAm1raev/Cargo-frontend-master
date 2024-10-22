<template>
    <div class="wrapper">
        <sidebar activePage="make-order"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <make-order></make-order>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import MakeOrder from '@/components/MakeOrder.vue';

export default {
  components: { Sidebar, Navbar, MakeOrder },
}
</script>

<style src="../../assets/css/bootstrap.min.css" scoped></style>
<style src="../../assets/css/now-ui-dashboard.css" scoped></style>