import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component('sh-button', Button)
Vue.component('sh-icon', Icon)
Vue.component('sh-button-group', ButtonGroup)
Vue.component('sh-input', Input)
Vue.component('sh-row', Row)
Vue.component('sh-col', Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'pck'
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    }
  }
})