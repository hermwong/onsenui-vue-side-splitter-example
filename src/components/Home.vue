<template id="home">
  <v-ons-page>
    <custom-toolbar title="Home" v-on:menuToggled="sideMenu"></custom-toolbar>
    <p style="text-align: center">
      Welcome home.
    </p>
  </v-ons-page>
</template>

<script>
import CustomToolbar from './CustomToolbar'

export default {
  name: 'Home',
  components: {
    'custom-toolbar': CustomToolbar
  },
  methods: {
    sideMenu() {
      this.$emit('menuToggled');
    }
  }
}
</script>
