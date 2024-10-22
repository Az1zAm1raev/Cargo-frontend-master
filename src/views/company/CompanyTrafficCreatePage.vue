<template>
    <div class="wrapper">
        <sidebar activePage="traffic-create"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <create-transport></create-transport>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import CreateTransport from '@/components/CreateTransport.vue';

export default {
  components: { Sidebar, Navbar, CreateTransport },
}
</script>

<style src="../../assets/css/bootstrap.min.css" scoped></style>
<style src="../../assets/css/now-ui-dashboard.css" scoped></style>