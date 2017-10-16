<template>
  <v-ons-splitter>
    <v-ons-splitter-side swipeable width="150px" collapse"" side="left" :open.sync="openSide" :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'">
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item v-for="page in pages" tappable modifier="chevron" @click="currentPage = page; openSide = false">
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>
    <v-ons-splitter-content>
      <component :is="currentPage" v-on:menuToggled="sideMenu"></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import Home from './Home'
import News from './News'
import Settings from './Settings'

export default {
  name: 'LeftMenu',
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
    sideMenu() {
      console.log('toggleMenu handled');
      this.openSide = !this.openSide;
      console.log(this.openSide);
    }
  }
}
</script>
