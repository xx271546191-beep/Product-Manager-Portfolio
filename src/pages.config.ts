/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages.
 * 
 * @module pages.config
 */

interface PageMeta {
  title: string;
  description: string;
  heading?: string;
  intro?: string;
}

export const pagesConfig = {
  home: {
    title: '首页',
    description: 'AI产品经理实习生作品集，聚焦企业知识库、RAG 与行业智能化场景下的需求分析、原型设计、测试评估与方案推进。',
  },
  
  projects: {
    title: '项目作品',
    description: '项目案例展示，覆盖企业知识库、石化流程升级与复杂工业图纸智能处理等 AI 产品实践。',
    heading: '项目作品',
    intro: '这里展示了我参与的项目案例，讲述每个项目的背景、挑战、决策过程和最终成果。',
  },
  
  decisions: {
    title: '决策记录',
    description: '记录工作中的关键决策，包括背景、备选方案和选择理由。',
    heading: '决策记录',
    intro: '记录工作中做出的重要决策，分享当时的考量、备选方案和最终选择的原因。',
  },
  
  journey: {
    title: '职业历程',
    description: '我的学习与实习时间线，展示从农学硕士到 AI 产品经理实习生的成长过程。',
    heading: '职业历程',
    intro: '记录我的职业发展历程，包括重要的学习经历、实习经历和成长时刻。',
  },
  
  writing: {
    title: '思考与总结',
    description: '关于产品设计、用户体验和职业发展的思考。',
    heading: '思考与总结',
    intro: '分享我在产品工作中的思考和总结，涵盖产品设计、用户研究和职业发展等方面。',
  },

  speaking: {
    title: '分享与交流',
    description: '参与过的分享活动、演讲和交流。',
    heading: '分享与交流',
    intro: '记录我参与过的分享活动，包括演讲、研讨会和交流心得。',
  },
  
  uses: {
    title: '工具与技能',
    description: '我使用的工具和技能栈。',
    heading: '工具与技能',
    intro: '分享我在产品工作中使用的工具和技能，包括原型设计、数据分析、项目管理等。',
  },
  
  contact: {
    title: '联系我',
    description: '欢迎联系我交流 AI 产品、知识库/RAG 与行业智能化相关话题。',
    heading: '联系我',
  },
} as const;

export type PagesConfig = typeof pagesConfig;
export type PageConfig = PageMeta;
