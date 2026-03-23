# Home And Navigation Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将个人网站改造成浅色单主题的编辑式首页，并重做顶部导航与首页核心信息结构。

**Architecture:** 以现有 Astro 结构为基础，集中修改 `BaseLayout`、`Navigation`、`global.css` 和 `index.astro`。全局只建立新的浅色视觉变量和页面基线，具体视觉表达与信息结构主要收敛在首页和导航，避免误伤项目详情页与其他内容页。

**Tech Stack:** Astro, CSS Custom Properties, Astro components, responsive CSS

---

## File Structure

- Modify: `src/layouts/BaseLayout.astro`
  负责移除深浅主题切换逻辑，保留吸顶头部与统一页面背景。
- Modify: `src/components/Navigation.astro`
  负责实现胶囊式吸顶导航、中文文案呈现、当前页高亮和移动端布局。
- Modify: `src/styles/global.css`
  负责建立暖白浅色变量、描边卡片语言、按钮与焦点的全局基线。
- Modify: `src/pages/index.astro`
  负责重写首页 Hero、速览卡片、项目摘要卡、工作方式模块和 CTA。
- Optional Modify: `src/styles/typography.css`
  仅在首页标题层级难以通过局部样式控制时再调整。

### Task 1: 重建全局浅色视觉基线

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: 移除深浅主题切换逻辑**

删除 `BaseLayout` 中默认 `data-theme="dark"`、本地存储读取、View Transitions 主题同步和主题色 `meta` 的深色值依赖，改为固定浅色站点基线。

- [ ] **Step 2: 建立新的浅色变量系统**

在 `global.css` 中重写颜色、圆角、阴影、边框和按钮基础变量，使用暖白背景、近黑描边、粉黄蓝标签色，并保留足够的文本对比度。

- [ ] **Step 3: 调整全局背景与交互基线**

让 `body`、链接、焦点态、容器间距、基础代码块样式与新视觉统一，同时避免影响文章页可读性。

- [ ] **Step 4: 校验全局样式是否可被其他页面继承**

运行：`npx astro check`
预期：`0 errors`

### Task 2: 重做顶部导航

**Files:**
- Modify: `src/components/Navigation.astro`

- [ ] **Step 1: 去掉主题切换依赖**

删除 `ThemeToggle` 引入、右侧附加栏和相关样式逻辑，让导航结构只保留目录型入口。

- [ ] **Step 2: 实现胶囊式导航结构**

把导航改成居中的吸顶胶囊条，保留首页、项目作品、职业历程、关于我入口；桌面端居中排列，移动端压缩为可换行或紧凑滚动。

- [ ] **Step 3: 强化当前页和交互反馈**

把当前页改为更明确的实心标签或高亮底块，补齐 hover、focus-visible 和 sticky 滚动时的层级表现。

- [ ] **Step 4: 验证语义和可访问性**

确认 `aria-label`、`aria-current`、键盘 Tab 焦点与点击区域都保持可用。

### Task 3: 重构首页信息结构与视觉表现

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: 重写 Hero 结构**

把首屏改为左侧求职主叙事、右侧抽象插画卡片；移除证件照主视觉，改用纯 CSS 几何图形和标签构建“身份卡”。

- [ ] **Step 2: 增加成果速览区**

在 Hero 下方增加 3 到 4 个高信息密度卡片，突出项目数量、核心方向、典型角色和推进能力。

- [ ] **Step 3: 重写项目摘要区**

把首页项目卡改成编辑式摘要卡，统一描边卡片语言，突出角色、问题场景、结果价值与跳转入口。

- [ ] **Step 4: 把技能墙改成工作方式模块**

从“技能列表”改成“我如何工作”模块，强调需求拆解、产品规划、跨团队推进和 AI 应用落地。

- [ ] **Step 5: 收紧职业历程与 CTA 表达**

保留必要经历信息，但减轻模板感，确保首页阅读路径落在“认识你 -> 看证据 -> 继续浏览/联系”。

### Task 4: 响应式收尾与验证

**Files:**
- Modify: `src/components/Navigation.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: 调整移动端布局**

确认导航、Hero、按钮、卡片和项目区在窄屏下不拥挤，点击区域足够大。

- [ ] **Step 2: 调整桌面端节奏**

确认首页桌面端留白、双栏比例、卡片网格和吸顶导航层级自然，不像模板拼装。

- [ ] **Step 3: 运行静态校验**

运行：`npx astro check`
预期：`0 errors / 0 warnings / 0 hints`

- [ ] **Step 4: 运行构建验证**

运行：`npm run build`
预期：构建成功；若当前机器继续复现既有环境崩溃，则记录为环境问题并保留 `astro check` 结果。

- [ ] **Step 5: 手动检查关键页面**

检查首页、项目页、职业历程页和联系页，确认全局样式调整没有破坏现有内容页的可读性。
