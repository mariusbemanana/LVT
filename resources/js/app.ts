import './bootstrap';
import Vue from 'vue';
import VueRouter from "vue-router";
import App from './components/App.vue';
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    components: { App },
});
