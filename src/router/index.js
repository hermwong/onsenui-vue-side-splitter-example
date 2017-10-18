import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/homePage'
import SplitterMain from '../components/splitterMain'
import News from '../components/newsPage'
import Settings from '../components/settingsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: SplitterMain
    },
    {
      path: '/splitterMain',
      component: SplitterMain,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'settings',
          component: Settings
        }
      ]
    }
  ]
})
