import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.filter('grana', (value) => {
  if(typeof value !== 'number') {
    return value;
  }
  return `R$ ${value.toFixed(2)}`
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
