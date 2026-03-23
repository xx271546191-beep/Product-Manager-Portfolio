# Project Prototype Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为网站中的操作票项目和新增交接班项目接入 3 个可直接访问的静态原型页面。

**Architecture:** 保持现有 Astro 内容集合结构不变，把原型 HTML 作为静态资源放到 `public/prototypes/` 下，通过项目详情页中的按钮跳转访问。新增一个交接班项目页承载 PC / App 两个原型入口，并在操作票项目页挂接操作票原型入口。

**Tech Stack:** Astro content collections, MDX, static HTML assets, public directory routing

---

## File Structure

- Create: `public/prototypes/handover-pc.html`
- Create: `public/prototypes/handover-app.html`
- Create: `public/prototypes/operation-ticket.html`
- Create: `src/content/projects/ai-handover-shift.mdx`
- Modify: `src/content/projects/local-operation-ticket-ai.mdx`
- Optional Modify: `src/pages/index.astro`
  仅当需要把交接班项目加入首页代表项目时再修改。

### Task 1: 接入静态原型资源

**Files:**
- Create: `public/prototypes/handover-pc.html`
- Create: `public/prototypes/handover-app.html`
- Create: `public/prototypes/operation-ticket.html`

- [ ] **Step 1: 复制 3 个原型 HTML 到正式仓库**

将 `交接班pc.html`、`交接班app.html`、`操作票原型.html` 复制到 `public/prototypes/` 下，建立稳定可访问路径。

- [ ] **Step 2: 做必要的匿名化修正**

把原型中暴露真实地名的标题或显眼文案替换为“某地石化”，与现有网站匿名化策略保持一致。

- [ ] **Step 3: 验证静态路径设计**

目标访问路径：
- `/prototypes/handover-pc.html`
- `/prototypes/handover-app.html`
- `/prototypes/operation-ticket.html`

### Task 2: 新增交接班项目页

**Files:**
- Create: `src/content/projects/ai-handover-shift.mdx`

- [ ] **Step 1: 基于项目总结撰写交接班项目 frontmatter**

使用 `04-茂名石化 AI交接班_逐项目深拆正文.md` 中已经确认过的口径，整理标题、角色、时间、概览、问题、约束、方案、影响和收获。

- [ ] **Step 2: 在正文中补充原型入口**

在项目正文中加入清晰的“查看完整原型”区块，包含：
- `查看 PC 原型`
- `查看 App 原型`

- [ ] **Step 3: 确保项目能被现有项目列表自动收录**

设置合适的 `order`、`featured`、`relatedProjects` 字段，保证它能正常出现在 `/projects` 页面。

### Task 3: 为操作票项目增加原型入口

**Files:**
- Modify: `src/content/projects/local-operation-ticket-ai.mdx`

- [ ] **Step 1: 在项目正文新增原型说明**

说明这是该项目的静态原型展示页面，用于查看完整界面而非线上系统。

- [ ] **Step 2: 增加操作票原型按钮**

加入一个明确入口：
- `查看操作票原型`

### Task 4: 校验与收尾

**Files:**
- Modify: `src/content/projects/ai-handover-shift.mdx`
- Modify: `src/content/projects/local-operation-ticket-ai.mdx`
- Create: `public/prototypes/*.html`

- [ ] **Step 1: 运行内容校验**

运行：`npx astro check`
预期：`0 errors / 0 warnings / 0 hints`

- [ ] **Step 2: 抽查项目路由与原型链接**

确认以下路径存在并可被部署：
- `/projects/ai-handover-shift`
- `/projects/local-operation-ticket-ai`
- `/prototypes/handover-pc.html`
- `/prototypes/handover-app.html`
- `/prototypes/operation-ticket.html`

- [ ] **Step 3: 提交并推送**

提交后推送到 `main`，触发线上部署。
