import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/homePage'
import SplitterMain from '../components/splitterMain'
import SplitterMainPage from '../components/splitterMainPage'
import News from '../components/newsPage'
import Settings from '../components/settingsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/splitterMain',
      component: SplitterMain,
      children: [
        {
          path: 'home',
          tite: 'Home',
          component: Home
        },
        {
          path: 'news',
          title: 'News',
          component: News
        },
        {
          path: 'settings',
          title: 'Settings',
          component: Settings
        }
      ]
    }
  ]
})
