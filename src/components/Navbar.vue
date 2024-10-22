<template>

    <nav class="navbar navbar-expand-lg bg-primary  navbar-absolute" :class="!navbarFlag ? 'navbar-transparent':'bg-white'">
        <div class="container-fluid">
            <div class="navbar-wrapper">
                <div class="navbar-toggle" :class="sidebarFlag ? 'toggled' : ''">
                    <button @click="sidebarOpen" type="button" class="navbar-toggler">
                        <span class="navbar-toggler-bar bar1"></span>
                        <span class="navbar-toggler-bar bar2"></span>
                        <span class="navbar-toggler-bar bar3"></span>
                    </button>
                </div>
                <a class="navbar-brand" href="">Dashboard</a>
            </div>
            <button @click="navbarFlag = !navbarFlag" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navigation">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" @click="$router.push('/')">
                            <i class="bi bi-box-arrow-in-right"></i>

                            <p>
                                <span class="d-lg-none d-md-block">Logout</span>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="panel-header panel-header-sm">
    </div>
    
</template>

<script>

export default {
    data() {
        return {
            navbarFlag: false,
            html: document.querySelector('html'),
            sidebarFlag: false
        }
    },
    methods: {
        sidebarOpen() {
            if (this.sidebarFlag) {
                this.html.classList.remove('nav-open')
            } else {
                this.html.classList.add('nav-open');
            }
            this.sidebarFlag = !this.sidebarFlag;
        }
    }

}
</script>

<style src="../assets/css/now-ui-dashboard.css" scoped></style>
<style src="../assets/css/bootstrap.min.css" scoped></style>
