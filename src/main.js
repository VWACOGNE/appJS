import { createApp } from 'vue'
import App from './App.vue'
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import { createRouter, createWebHistory } from "vue-router";

import './assets/main.css'

// createApp(App).mount('#app')

const routes = [
    { path: "/suppliers", component: SuppliersList },
    { path: "/map", component: SuppliersMap },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");
