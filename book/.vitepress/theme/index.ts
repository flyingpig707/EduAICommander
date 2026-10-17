import DefaultTheme from 'vitepress/theme'
import EduCommanderHome from './EduCommanderHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('EduCommanderHome', EduCommanderHome)
  },
}
