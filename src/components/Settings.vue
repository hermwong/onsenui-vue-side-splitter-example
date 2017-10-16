<template id="settings">
  <v-ons-page>
    <custom-toolbar title="Settings" v-on:menuToggled="sideMenu"></custom-toolbar>
    <p style="text-align: center">
      Change the settings.
    </p>
  </v-ons-page>
</template>

<script>
import CustomToolbar from './CustomToolbar'

export default {
  name: 'Settings',
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
