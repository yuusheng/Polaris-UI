import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Polaris UI',
  description: 'Polaris UI官方文档',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://cdn.jsdelivr.net/gh/kevin-lier/picgo/img/头像.jpg',
  },
})
