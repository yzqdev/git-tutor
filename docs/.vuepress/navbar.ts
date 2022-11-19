import type { NavbarConfig } from 'vuepress'
import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  {
    text: 'git指南',
    icon: 'creative',
    link: '/git/README.md',
  },
  {
    text: 'github配置',
    icon: 'config',
    link: '/github/README.md',
  },
  {
    text: 'github技巧',
    icon: 'config',
    link: '/tips/README.md',
  },
])
 
