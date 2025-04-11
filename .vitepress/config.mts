import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir: 'docs',
  base: '/daji-learning/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Java学习', link: '/learning/java' },
          { text: '算法学习', link: '/learning/algorithm' },
          { text: '网络学习', link: '/learning/network' }
        ]
      }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated:{
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },
    
    search: {
      provider: 'local',
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
