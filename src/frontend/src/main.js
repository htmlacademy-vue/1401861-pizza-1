import Vue from "vue";
import App from "./App.vue";

//отключает стандартное предупреждение vue в консоли браузера о работе в режиме разработки.
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
