<template>
  <transition name="slide-splitter">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="left">
          <v-ons-toolbar-button @click="() => openSide = !openSide">
            <v-ons-icon icon="ion-navicon" size="28px" fixed-width="false"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
        <div class="center">{{ pageTitle }}</div>
      </v-ons-toolbar>
      <v-ons-splitter>
        <v-ons-splitter-side swipeable width="150px" collapse side="left" :open="openSide" @update="openSide = $event">
          <v-ons-page>
            <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
            <v-ons-list class="menu-list">
              <v-ons-list-item tappable class="menu-main" @click="openPage('home', 'Home')">
                <v-ons-icon icon="fa-home"></v-ons-icon>
                Home
              </v-ons-list-item>
              <v-ons-list-item tappable modifier="nodivider" class="menu-item" @click="openPage('news', 'News')">
                <v-ons-icon icon="fa-plus"></v-ons-icon>
                News
              </v-ons-list-item>
              <v-ons-list-item tappable modifier="nodivider" class="menu-item" @click="openPage('settings', 'Settings')">
                <v-ons-icon icon="fa-bookmark"></v-ons-icon>
                Settings
              </v-ons-list-item>
            </v-ons-list>
          </v-ons-page>
        </v-ons-splitter-side>
        <v-ons-splitter-content>
          <router-view></router-view>
        </v-ons-splitter-content>
      </v-ons-splitter>
    </v-ons-page>
  </transition>
</template>

<script>
  export default {
    name: 'splitterMain',
    data() {
      return {
        openSide: false,
        pageTitle: 'Home'
      }
    },
    methods: {
      openPage: function(page, title) {
        if (page === '') {
          if (this.$route.path === '/splitterMain') {
            return;
          }
          this.pageTitle = 'Home';
          this.$router.push({ path: '/splitterMain' });
        }
        else {
          this.pageTitle = title;
          if (this.$route.path === '/splitterMain/' + page) {
            return;
          }
          this.$router.push({ path: '/splitterMain/' + page });
        }
        this.openSide = !this.openSide;
      }
    }
  }
</script>
