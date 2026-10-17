import { defineConfig } from 'vitepress'

const chapter = (text: string, file: string) => ({
  text,
  link: `/${encodeURIComponent(file)}`,
})

export default defineConfig({
  lang: 'zh-CN',
  title: '教育AI指挥官（高校版）',
  titleTemplate: ':title｜教育AI指挥官（高校版）',
  description: '《教育AI指挥官（高校版）》——成为AI指挥官，培养AI指挥官：高校高职的AI实训指南。刘继军、吴鹏等著。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://edu.learn-together.cn',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#103fa7' }],
    ['meta', { property: 'og:type', content: 'book' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '教育AI指挥官（高校版）' }],
  ],
  themeConfig: {
    siteTitle: '教育AI指挥官·高校版',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/01-%E5%BA%8F%E8%A8%80%E4%B8%8E%E5%86%B3%E7%AD%96%E8%80%85%E5%AF%BC%E8%AF%BB' },
      { text: '🖨️ A4行动工具卡', link: '/toolkit.html', target: '_blank' },
      { text: '共同写作', link: '/#coauthor' },
      { text: '全书目录', link: '/00-%E5%B0%81%E9%9D%A2' },
    ],
    sidebar: [
      {
        text: '文前导读',
        items: [
          chapter('全书目录与工具入口', '00-封面'),
          chapter('序言与决策者导读', '01-序言与决策者导读'),
        ],
      },
      {
        text: '第一部分 总纲篇：三力融合',
        items: [
          chapter('第一章 人才标准正在改变', '02-第一章-人才标准正在改变'),
          chapter('第二章 未来人才的基本模型', '03-第二章-未来人才的基本模型'),
        ],
      },
      {
        text: '第二部分 教改篇：课堂四新',
        items: [
          chapter('第三章 新教法：师机生课堂关系', '04-第三章-新教法'),
          chapter('第四章 新助手：学科AI助手', '05-第四章-新助手'),
          chapter('第五章 新教材：生成式交互资源', '06-第五章-新教材'),
          chapter('第六章 新课程：严肃游戏与挑战', '07-第六章-新课程'),
        ],
      },
      {
        text: '第三部分 培养篇：学段与实训',
        items: [
          chapter('第七章 新学段：重组学习周期', '08-第七章-新学段'),
          chapter('第八章 新人才：九段×十步双螺旋', '09-第八章-新人才'),
          chapter('第九章 短周期样板：5天与3周实训', '10-第九章-短周期实战样板'),
        ],
      },
      {
        text: '第四部分 生态篇：产教与社会服务',
        items: [
          chapter('第十章 把产业引进来：实训中心与监理', '11-第十章-把产业引进来'),
          chapter('第十一章 把大学推向社会：开门办学', '12-第十一章-把大学推向社会'),
        ],
      },
      {
        text: '收束与随书工具箱',
        items: [
          chapter('附录 十大行动工具箱总集', '13-附录-行动工具箱总集'),
          { text: '🖨️ 13页A4标准工具卡（打印版）', link: '/toolkit.html', target: '_blank' },
        ],
      },
    ],
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索全书与工具',
            buttonAriaLabel: '搜索全书与工具',
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
      },
    },
    editLink: {
      pattern: '/#coauthor',
      text: '用 Agent 参与共同写作',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/flyingpig707/EduAICommander' },
    ],
    footer: {
      message: '在智力大通胀年代，把人培养成驾驭算力的“自用之才”',
      copyright: '刘继军、吴鹏等 著 · AI共生岛出品',
    },
  },
})
