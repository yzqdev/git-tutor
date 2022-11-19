import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './themeConfig'
export default defineUserConfig({
  base: '/git-tutor/',
  dest: './dist',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'git教程',
      description: '一个简单的git教程✨',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',

        href: `/git-tutor/images/git.png`,
      },
    ],

    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],

    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config

  lang: 'zh-CN',
  title: 'git-tutor',
  description: 'A simple git tutorial',

  theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],
})
