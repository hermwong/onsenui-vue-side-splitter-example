<template>
  <v-ons-toolbar>
    <div class="left">
      <!-- some reason the Hamburger menu is tied to name=right in the slot element -->
      <slot name="right"></slot>
    </div>
    <div class="center"><slot>{{ title }}</slot></div>
    <div class="right"></div>
  </v-ons-toolbar>
</template>

<script>
export default {
  props: ['title', 'backLabel']
};
</script>
