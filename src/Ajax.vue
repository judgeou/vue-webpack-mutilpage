<template>
    <div>
        <h1>{{msg}}</h1>
        <div>
          <button @click="pull">pull data</button>
        </div>
    </div>
    
</template>

<script>
/* eslint-disable no-undef */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'ajax',
  data () {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    pull () {
      var vm = this
      var http = vm.$http
      http.get('/zggf_dz/api/rent/currentRentDate').then((res) => {
        console.log(res)
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>
