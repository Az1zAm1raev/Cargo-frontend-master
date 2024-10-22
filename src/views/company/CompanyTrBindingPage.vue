<template>
    <div class="wrapper">
        <sidebar activePage="traffic-binding"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <transport-binding></transport-binding>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import TransportBinding from '@/components/TransportBinding.vue';

export default {
  components: { Sidebar, Navbar, TransportBinding },
}
</script>

<style src="../../assets/css/bootstrap.min.css" scoped></style>
<style src="../../assets/css/now-ui-dashboard.css" scoped></style>