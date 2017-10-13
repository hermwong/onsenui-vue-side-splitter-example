<template id="toolbar">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="action">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ title }}</div>
  </v-ons-toolbar>
</template>

<script>
export default {
  name: 'CustomToolbar',
  props: ['title', 'openSide'],
  data() {
    return {
      isOpen: this.openSide
    }
  },
  methods: {
    action() {
      // need to toggle the value of openSide in LeftMenu
      this.isOpen = !this.isOpen;
      this.$emit('menuToggled', [this.isOpen]);
    }
  }
}
</script>
