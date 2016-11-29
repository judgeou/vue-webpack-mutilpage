import Hello from '../src/components/Hello'

/* eslint-disable no-new,no-undef */
new Vue({
  el: '#old1',
  components: {
    Hello
  },
  data: {
    msg: 'this is old page'
  }
})
