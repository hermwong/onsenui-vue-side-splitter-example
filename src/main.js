import Vue from 'vue';
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';
import CustomToolbar from './components/toolbar';
import storeLike from './store.js';
import AppNavigator from './App';

require('onsenui/css/onsenui.css');
require('onsenui/css-components-src/src/onsen-css-components.css');

Vue.use(Vuex);
Vue.use(VueOnsen);
Vue.component('custom-toolbar', CustomToolbar); // Common toolbar

new Vue({
  el: '#app',
  render: h => h(AppNavigator),
  store: new Vuex.Store(storeLike),
  beforeCreate() {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid();
  }
});
