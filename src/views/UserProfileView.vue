<template>
    <div class="wrapper">
        <sidebar activePage="profile"></sidebar>
        <div class="main-panel ps ps--active-y" id="main-panel">
          <navbar></navbar>
          <profile></profile>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import Profile from '@/components/Profile.vue';

export default {
  components: { Sidebar, Navbar, Profile },
}
</script>

<style src="../assets/css/bootstrap.min.css" scoped></style>
<style src="../assets/css/now-ui-dashboard.css" scoped></style>