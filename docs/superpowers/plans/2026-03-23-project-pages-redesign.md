# Project Pages Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把项目列表页和项目详情页改造成与首页一致的中文编辑式作品集页面。

**Architecture:** 在不修改项目内容 schema 的前提下，重做 `projects/index`、`ProjectCard`、`projects/[slug]` 和 `CaseStudyLayout` 的页面结构与视觉层级。所有原型、GitHub、外链入口继续使用现有 MDX 内容中的链接块，并在详情页头部补充聚合入口，让用户更快到达关键内容。

**Tech Stack:** Astro, Astro content collections, MDX, CSS Custom Properties, Astro components

---

## File Structure

- Modify: `src/pages/projects/index.astro`
  重做项目列表页页头、中文文案、统计与卡片墙节奏。
- Modify: `src/components/ProjectCard.astro`
  重做项目卡信息层级、中文化按钮与标签、入口提示表达。
- Modify: `src/components/BaseCard.astro`
  仅在 `ProjectCard` 无法单独完成新卡片风格时做最小壳层调整。
- Modify: `src/pages/projects/[slug].astro`
  重做项目详情页头部封面区、章节标题中文化、入口按钮前置。
- Modify: `src/layouts/CaseStudyLayout.astro`
  调整阅读宽度、中文案例页节奏和共享章节样式。
- Optional Modify: `src/pages.config.ts`
  仅在项目页页头文案需要统一时修改。

### Task 1: 重做项目列表页页头与整体结构

**Files:**
- Modify: `src/pages/projects/index.astro`
- Optional Modify: `src/pages.config.ts`

- [ ] **Step 1: 调整列表页文案与统计表达**

把项目页标题、介绍、统计信息改成中文作品集表达，避免继续使用英文 `projects / featured` 口吻。

- [ ] **Step 2: 增加列表页 Hero 区**

在项目页顶部加入一个简短的索引页 Hero，明确项目覆盖的方向：知识库、RAG、工业流程、政务、数字人、具身智能。

- [ ] **Step 3: 调整列表页卡片容器节奏**

让项目卡片墙与首页风格统一，桌面端形成清晰栅格，移动端自然堆叠。

- [ ] **Step 4: 运行校验**

运行：`npx astro check`
预期：`0 errors`

### Task 2: 重做项目卡片组件

**Files:**
- Modify: `src/components/ProjectCard.astro`
- Optional Modify: `src/components/BaseCard.astro`

- [ ] **Step 1: 调整卡片信息层级**

将卡片重组为：
- 项目标题
- 角色 / 年份 / 状态
- 一句结果摘要
- 关键方向标签

- [ ] **Step 2: 中文化辅助文案**

把 `Featured`、`Completed`、`View case study` 等模板式英文文案改成中文作品集表达。

- [ ] **Step 3: 增加入口提示**

对带原型、GitHub、外链的项目增加轻量提示，例如：
- `可查看原型`
- `附仓库入口`
- `附外部展示`

提示只负责识别，不在列表页内增加过多按钮。

- [ ] **Step 4: 统一卡片视觉**

让项目卡片和首页的描边、圆角、色块、hover 反馈统一，必要时只对 `ProjectCard` 单独写样式，不把 `BaseCard` 改得过宽。

### Task 3: 重做项目详情页头部

**Files:**
- Modify: `src/pages/projects/[slug].astro`
- Modify: `src/layouts/CaseStudyLayout.astro`

- [ ] **Step 1: 重构详情页头部封面区**

在项目页顶部聚合：
- 项目标题
- 角色
- 年份 / 时间 / 状态 / 阅读时长
- 一句结果摘要
- 关键入口按钮

- [ ] **Step 2: 前置关键入口**

根据项目正文中已有内容判断是否显示：
- `查看原型`
- `查看仓库`
- `外部展示`

优先在页头展示 1 到 3 个关键入口，不新增 schema 字段。

- [ ] **Step 3: 中文化返回入口与状态文案**

把返回按钮、状态、元信息、阅读时长周边文案改成中文统一表达。

### Task 4: 中文化详情页章节与正文节奏

**Files:**
- Modify: `src/pages/projects/[slug].astro`
- Modify: `src/layouts/CaseStudyLayout.astro`

- [ ] **Step 1: 把章节标题全部中文化**

按 spec 改成：
- `项目概述`
- `核心问题`
- `项目约束`
- `方案路径`
- `关键判断`
- `关键能力 / 技术要点`
- `结果与价值`
- `项目收获`

- [ ] **Step 2: 调整正文样式节奏**

提高中文可读性，优化段落间距、列表样式、指标区与决策区的层级。

- [ ] **Step 3: 统一原型 / 仓库按钮样式**

保留正文中的链接块，但与页头入口保持同一套按钮语言。

### Task 5: 响应式与收尾验证

**Files:**
- Modify: `src/pages/projects/index.astro`
- Modify: `src/components/ProjectCard.astro`
- Modify: `src/pages/projects/[slug].astro`
- Modify: `src/layouts/CaseStudyLayout.astro`

- [ ] **Step 1: 调整移动端布局**

确认：
- 列表页卡片在移动端堆叠合理
- 详情页头部按钮在窄屏下不会拥挤
- 正文中文排版在手机上仍可读

- [ ] **Step 2: 运行静态校验**

运行：`npx astro check`
预期：`0 errors / 0 warnings / 0 hints`

- [ ] **Step 3: 运行构建验证**

运行：`npm run build`
预期：若当前机器继续复现既有 Astro 构建环境崩溃，则记录为环境问题；至少保留 `astro check` 成功结果。

- [ ] **Step 4: 手动检查关键页面**

检查：
- `/projects`
- 至少 3 个不同类型项目详情页（知识库、原型项目、带 GitHub 项目）
- 首页到项目页的跳转体验是否连贯

- [ ] **Step 5: 提交并推送**

提交改动并推送到 `main`，触发线上部署。
