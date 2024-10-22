<template>
    <div class="wrapper">
        <sidebar activePage="dashboard"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <dashboard></dashboard>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import Dashboard from '@/components/Dashboard.vue';

export default {
  components: { Sidebar, Navbar, Dashboard },
}
</script>

<style src="../../assets/css/bootstrap.min.css" scoped></style>
<style src="../../assets/css/now-ui-dashboard.css" scoped></style>