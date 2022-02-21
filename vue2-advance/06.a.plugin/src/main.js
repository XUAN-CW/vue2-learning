import Vue from 'vue'
import App from './App.vue'

//引入插件
import HelloPlugin from './plugins/HelloPlugin'

Vue.config.productionTip = false

//应用（使用）插件
Vue.use(HelloPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
