# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Next.js 15 的 GitHub Issues 展示平台，使用 TypeScript、TailwindCSS 和 Radix UI 构建。项目主要展示 existential-perplexity 仓库的 GitHub Issues 内容。

## 开发命令

```bash
# 开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 启动生产服务器
pnpm run start

# 代码检查
npm run lint
```

## 技术栈

- **Next.js 15** - React 框架，支持 App Router
- **TypeScript** - 类型安全
- **TailwindCSS** - 样式框架
- **Radix UI** - 无障碍 UI 组件
- **GitHub API** - 数据来源

## 项目结构

```
├── app/                 # Next.js App Router
│   ├── about/          # 关于页面
│   ├── posts/          # 文章相关页面
│   │   ├── [slug]/     # 动态路由 - 单篇文章
│   │   └── page.tsx    # 文章列表页
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   └── not-found.tsx   # 404 页面
├── components/         # React 组件
│   ├── ui/            # 基础 UI 组件 (shadcn/ui)
│   ├── post-list.tsx  # 文章列表组件
│   ├── post-content.tsx # 文章内容组件
│   ├── sidebar.tsx    # 侧边栏组件
│   └── about.tsx      # 关于组件
├── lib/               # 工具函数
│   ├── github.ts      # GitHub API 接口
│   └── utils.ts       # 工具函数
├── hooks/             # 自定义 React Hooks
└── public/            # 静态资源
```

## 核心功能

1. **GitHub Issues 展示** - 从 `sing1ee/existential-perplexity` 仓库获取 Issues 数据
2. **分页功能** - 支持文章列表分页浏览
3. **响应式设计** - 适配移动端和桌面端
4. **服务器端渲染** - 使用 Next.js App Router 进行 SSR

## 数据获取

- 使用 `lib/github.ts` 中的函数获取 GitHub Issues 数据
- 数据缓存 1 小时 (`revalidate: 3600`)
- 支持分页参数 (`page`, `per_page`)

## 样式规范

- 使用 TailwindCSS 进行样式设计
- 采用响应式断点系统
- 使用 `font-serif` 字体家族
- 主要颜色：灰色系为主，蓝色用于交互

## 开发规范

- 使用中文进行代码注释和提交信息
- 遵循 Conventional Commits 规范
- 组件使用 TypeScript 严格类型
- 优先使用服务器组件 (Server Components)

## 环境变量

项目需要配置 GitHub Token (可选)：
```env
GITHUB_TOKEN=your_github_token
```

## 部署说明

- 支持 Vercel、Netlify 等平台部署
- 构建命令：`npm run build`
- 无需额外配置，Next.js 自动优化