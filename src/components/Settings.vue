<template id="settings">
  <v-ons-page>
    <custom-toolbar title="Settings" :openSide="openSide" v-on:menuToggled="sideMenu"></custom-toolbar>
    <p style="text-align: center">
      Change the settings.
    </p>
  </v-ons-page>
</template>

<script>
import CustomToolbar from './CustomToolbar'

export default {
  name: 'Settings',
  props: ['toggleMenu', 'openSide'],
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
