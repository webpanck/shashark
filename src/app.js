import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('sh-button', Button)
Vue.component('sh-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})