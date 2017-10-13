<template>
  <div id="app">
    <left-menu />
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu';

export default {
  name: 'app',
  components: {
    'left-menu': LeftMenu
  }
}
</script>
