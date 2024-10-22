import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegCarrier from "../views/carrier/RegCarrier.vue";
import RegShipper from "../views/shipper/RegShipper.vue";
import RegCompany from "../views/company/RegCompany.vue"
import AuthView from "../views/AuthView.vue";
import MainView from "../views/MainView.vue";
import UserProfileView from "../views/UserProfileView.vue";

import CarrierHomePage from "../views/carrier/CarrierHomePage.vue";
import CarrierOrdersPage from "../views/carrier/CarrierOrdersPage.vue";
import CarrierAcceptedOrdersPage from "../views/carrier/CarrierAcceptedOrdersPage.vue";

import MakeOrderPage from "../views/shipper/MakeOrderPage.vue";
import MyOrdersPage from "../views/shipper/MyOrdersPage.vue";

import CompanyTrafficCreatePage from "../views/company/CompanyTrafficCreatePage.vue";
import CompanyTrBindingPage from "../views/company/CompanyTrBindingPage.vue";

import BrokerOrdersPage from "../views/broker/BrokerOrdersPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/reg-carrier",
    name: "reg-carrier",
    component: RegCarrier,
  },
  {
    path: "/reg-shipper",
    name: "reg-shipper",
    component: RegShipper,
  },
  {
    path: "/reg-company",
    name: "reg-company",
    component: RegCompany,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: AuthView,
  },
  {
    path: "/main-page",
    name: "main",
    component: MainView,
  },
  {
    path: "/user-profile",
    name: "user-profile",
    component: UserProfileView,
  },

  // CARRIER

  {
    path: "/carrier/home",
    name: "carrier-home",
    component: CarrierHomePage,
  },
  {
    path: "/carrier/orders",
    name: "carrier-orders",
    component: CarrierOrdersPage,
  },
  {
    path: "/carrier/accepted-orders",
    name: "carrier-orders-accepted",
    component: CarrierAcceptedOrdersPage,
  },

  // SHIPPER

  {
    path: "/shipper/make-order",
    name: "make-order",
    component: MakeOrderPage,
  },
  {
    path: "/shipper/my-orders",
    name: "my-orders",
    component: MyOrdersPage,
  },

  // COMPANY
  {
    path: "/company/traffic-create",
    name: "traffic-create",
    component: CompanyTrafficCreatePage,
  },
  {
    path: "/company/traffic-binding",
    name: "traffic-binding",
    component: CompanyTrBindingPage,
  },

  // BROKER
  {
    path: "/broker/orders",
    name: "broker-orders",
    component: BrokerOrdersPage,
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;