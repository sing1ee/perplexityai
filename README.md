# GitHub Issues 展示平台

这是一个使用 Next.js 和 TailwindCSS 构建的 GitHub Issues 展示平台，提供优雅的界面来浏览和管理 GitHub Issues。

## 技术栈

- Next.js 14 - 用于服务器端渲染和路由
- TailwindCSS - 用于样式设计
- TypeScript - 提供类型安全
- GitHub API - 用于数据获取

## 功能特点

- 使用 GitHub API 获取 Issues 数据
- 服务器端渲染（SSR）确保最佳性能和 SEO
- 响应式设计，适配各种设备
- 优雅的 UI 界面，提供良好的用户体验

## 安装步骤

1. 克隆仓库
```bash
git clone [repository-url]
```

2. 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 创建环境变量文件
```bash
cp .env.example .env
```
然后在 `.env` 文件中填入你的 GitHub API token：
```
GITHUB_TOKEN=your_github_token
```

4. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

## 使用方法

1. 访问 `http://localhost:3000` 查看网站
2. 在首页可以浏览 GitHub Issues
3. 使用搜索功能查找特定的 Issues
4. 点击 Issues 查看详细信息

## 贡献指南

欢迎提交 Pull Request 来改进这个项目。在提交之前，请确保：

1. 代码符合项目的编码规范
2. 添加了必要的测试
3. 更新了相关文档

## 许可证

MIT License 