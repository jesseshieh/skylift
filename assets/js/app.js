import "phoenix_html"
import "../css/app.css"
import Vue from "vue"
import { mixin as clickaway } from 'vue-clickaway';

new Vue({
  el: "#sitebuilder",
  mixins: [ clickaway ],
  data: {
    menu: false
  },
  methods: {
    closeMenu: function() {
      this.menu = false
    }
  }
})
