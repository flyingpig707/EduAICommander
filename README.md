# 教育AI指挥官（高校版）

> AI COMMANDER FOR HIGHER EDUCATION

《教育AI指挥官（高校版）——成为AI指挥官，培养AI指挥官：高校高职的AI实训指南》独立书稿、A4行动工具箱、开放共写与在线阅读项目。

## 项目状态

- 当前阶段：V0.1 开放阅读基线书稿、13页 A4 标准可打印行动工具卡手册与 VitePress 阅读站已经建立。
- 中文书名：教育AI指挥官（高校版）。
- 英文标识：AI COMMANDER FOR HIGHER EDUCATION。
- 署名作者：刘继军、吴鹏等 著。
- 计划仓库：`flyingpig707/EduAICommander`。
- 计划域名：`edu.learn-together.cn`。

## 建设原则（一源三态）

- **第一态（唯一正式 Markdown 书稿）**：`book/` 作为唯一继续维护的正式 Markdown 书稿来源；阅读网站直接由 `book/` 中的书稿构建，不另行维护网页正文。
- **第二态（A4标准可打印行动工具卡手册）**：`book/public/toolkit.html` 承载随书配套的 13 页 A4 标准纵向打印版工具箱（十问十策速查总表、十维自检表、十大教改与产教融合工具卡、五大黄金提示词随身卡与四条治理铁律），支持线上阅读时一键打开打印。
- **第三态（VitePress 阅读站与 Agent-Native 共同写作）**：内容共建、网站发布和版本记录在同一个独立仓库中完成。

## 目录结构

```text
EduAICommander/
├── book/             唯一正式书稿、A4打印工具卡（public/toolkit.html）与 VitePress 阅读站
├── media/            正文引用的原始图表与媒体资源
├── assets/           封面、标识和项目展示资源
├── contributions/    外部高校教师与生态伙伴的共建提案库
├── scripts/          确定性校验与维护脚本
├── skills/           Agent 共写技能包（edu-ai-commander-coauthor）
└── .github/          GitHub 模板与自动化工作流
```

## 书稿基线

- `book/` 是从现在开始唯一继续维护的正式 Markdown 书稿。
- 当前基线包含全书目录、序言与决策者导读、四大部分共十一章正文和附录行动工具箱总集，共 14 个章节文件。
- `book/public/toolkit.html` 包含 13 页 A4 标准打印版《高校AI教改与实训行动工具卡手册》。

## 本地预览

本项目使用 Node.js 22+、pnpm 与 VitePress 1.6 构建阅读站。

```bash
pnpm install
pnpm docs:dev
```

构建生产版本：

```bash
pnpm docs:build
```

生成的网站位于 `book/.vitepress/dist/`。站点已经包含章节导航、页内目录、全文本地搜索、A4工具卡一键打印入口、深色模式、移动端适配与中文阅读样式。

## 参与共建

《教育AI指挥官（高校版）》采用“公开提案库＋作者编辑”的两级机制。外部参与者在 `contributions/` 提交结构化提案，不直接修改正式书稿；作者决定采用后，再通过独立编辑 Pull Request 更新 `book/`。

完整规则见 [`CONTRIBUTING.md`](CONTRIBUTING.md)，Agent 共写入口见 [`skills/edu-ai-commander-coauthor/`](skills/edu-ai-commander-coauthor/)。

## 在线发布

站点计划由 GitHub `main` 分支自动部署至 EdgeOne Makers，并绑定 `edu.learn-together.cn`。构建参数和首次上线步骤见 [`DEPLOYMENT.md`](DEPLOYMENT.md)。
