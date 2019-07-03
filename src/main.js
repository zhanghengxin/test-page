import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'
import ui from '../libs/index'
// const creatFile = require('./server/creat')

Vue.use(ui)
Vue.config.productionTip = false

// Vue.prototype.creatFile = creatFile
Vue.prototype.http = Axios

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
