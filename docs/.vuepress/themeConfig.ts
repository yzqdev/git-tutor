import {   zhNavbar } from './navbar'
import {   zhSidebar } from './sidebar'
import { hopeTheme } from 'vuepress-theme-hope'
export default hopeTheme({
  logo: '/images/git.png',
  repo: 'yzqdev/git-tutor',

  docsDir: 'docs',
  iconPrefix: 'iconfont icon-',
  // theme-level locales config
  locales: {
    '/': {
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

      displayFooter: true,
    },
  },
  plugins:{
    prismjs:{
      dark:'tomorrow',
      light:"tomorrow"
    }
  }
})
