require('./bootstrap');
import bootstrap from 'bootstrap'
import Vue from 'vue';

import VueRouter from 'vue-router';
import router from './router.js';
Vue.use(VueRouter);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import App from './App.vue';

import Layout from "./components/Layout";
Vue.component('layout', Layout );
import Appeals from "./components/Appeals";
Vue.component('appeals', Appeals );

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
