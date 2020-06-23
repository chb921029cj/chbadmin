import Vue from 'vue';
import App from './App.vue';
import './icons' // icon
import "@/assets/css/sprite.css"
Vue.config.productionTip = false;

new Vue({
    'render': h => h(App)
}).$mount('#app');