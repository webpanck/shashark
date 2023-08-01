import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('sh-button', Button)
Vue.component('sh-icon', Icon)
Vue.component('sh-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})