<template id="home">
  <v-ons-page>
    <custom-toolbar title="Home" :openSide="openSide" v-on:menuToggled="sideMenu"></custom-toolbar>
    <p style="text-align: center">
      Welcome home.
    </p>
  </v-ons-page>
</template>

<script>
import CustomToolbar from './CustomToolbar'

export default {
  name: 'Home',
  props: ['openSide'],
  components: {
    'custom-toolbar': CustomToolbar
  },
  methods: {
    sideMenu(isOpen) {
      this.$emit('menuToggled', [isOpen]);
    }
  }
}
</script>
