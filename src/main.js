//vue router
import VueRouter from 'vue-router'
//vue
import Vue from 'vue'
//vuwtify
import './plugins/vuetify'
import App from './App.vue'
import routes from './routes'


Vue.use(VueRouter)

const router = new VueRouter({ routes })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //sumando a la instancia del router con vue que tiene todas las rutas
  router
}).$mount('#app')
