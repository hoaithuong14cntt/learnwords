import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
Vue.config.productionTip = false
// Vue.directive('bgColor', {
//   bind(el, binding) {
//     let delay = 0;
//     if(binding.modifiers['thuong']) {
//       delay = 3000;
//     }

//     setTimeout(() => {
//       if(binding.arg === 'background') {
//         el.style.backgroundColor = binding.value;
//       } else {
//         el.style.color = binding.value;
//       }
//     }, delay);
//   }
// });
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
