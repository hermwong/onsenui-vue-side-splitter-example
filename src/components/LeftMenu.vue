<template>
  <v-ons-splitter>
    <v-ons-splitter-side swipeable width="150px" collapse"" side="left" :open.sync="openSide">
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item v-for="page in pages" tappable modifier="chevron" @click="currentPage = page; openSide = false">
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>
    <v-ons-splitter-content>
      <component :is="currentPage" :openSide="openSide" v-on:menuToggled="sideMenu"></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import Home from './Home'
import News from './News'
import Settings from './Settings'

export default {
  name: 'LeftMenu',
  props: ['title', 'action'],
  components: {
    home: Home,
    news: News,
    settings: Settings
  },
  data() {
    return {
      currentPage: 'home',
      pages: ['home', 'news', 'settings'],
      openSide: false
    }
  },
  methods: {
    sideMenu(isOpen) {
      console.log('toggleMenu handled');
      this.openSide = isOpen;
      console.log('openSide: ' + this.openSide);
    }
  }
}
</script>
