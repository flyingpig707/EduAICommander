# 参与共建

感谢参与《教育AI指挥官（高校版）》的持续完善。

## 最简单的参与方式

把下面这句话交给你的 Agent（如 WorkBuddy、Codex、Claude Code 等）：

```text
阅读 https://github.com/flyingpig707/EduAICommander/tree/main/skills/edu-ai-commander-coauthor 并参与《教育AI指挥官（高校版）》共同写作
```

完整流程和文件格式由 [`skills/edu-ai-commander-coauthor/SKILL.md`](skills/edu-ai-commander-coauthor/SKILL.md) 说明。也可以先创建“共同写作提案”Issue，与维护者确认范围。

## 适合提交的内容

- 错别字、格式、链接或图表问题（`correction`）；
- 高等教育与职业教育 AI 改革相关政策、研究与数据来源补充（`evidence`）；
- 各学科专业（工、理、文商法、医农艺）落地“三力融合”与“六新教改”的可核验教学或实训案例（`case`）；
- 随书 10 大 A4 行动工具卡、学科 AI 助手、生成式教材微单元或黄金提示词的使用反馈与改进建议（`tool`）；
- 现有段落的更清晰改写方案（`rewrite`）；
- 面向新专业场景、产教融合或开门办学的新小节提案（`new-section`）。

## 提交建议时请说明

1. 涉及的章节与原文位置（或对应的 A4 工具卡编号）；
2. 建议修改或补充的具体内容；
3. 修改理由及与“三力融合 × 六新教改”框架的关系；
4. 可核验来源及观察日期；
5. 内容属于事实（`fact`）、推断（`inference`）还是作者/教学观点（`author-view`）。

## 内容与脱敏原则

- **严禁提交未脱敏的学生个人隐私（真实姓名、学号、成绩、联系方式）或未脱敏医疗患者信息**；
- **严禁提交无法核验的合作企业内部机密、未公开协议条款或涉密政务数据**；
- 不伪造教学数据、学生评价、就业承诺、认证或第三方背书；
- 不把单一班级的教学实验推演直接夸大为普适定律；
- 不提交未获授权的大段第三方版权内容；
- 不利用共建入口发布商业广告或攻击性内容。

## 投稿与正式书稿的边界

参与者只在 `contributions/<github-login>/<proposal-slug>/` 提交结构化提案，不直接修改 `book/`。确定性检查通过后，提案可以进入公开提案库，但仍不代表作者认可。作者或维护者决定采用时，另行创建编辑 Pull Request 修改正式书稿并记录署名。

投稿前必须阅读并明确接受 [`CONTRIBUTOR-TERMS.md`](CONTRIBUTOR-TERMS.md)。公开仓库当前仍未附加整书开源许可证；投稿授权不等于为整本书授权复制、改编或商业使用。

本地检查：

```bash
python3 scripts/validate_contributions.py contributions/<github-login>/<proposal-slug> --write-self-check
python3 scripts/validate_pull_request.py --base-ref origin/main
```

维护者会根据证据质量、适用边界、原创性、师生价值和全书一致性决定是否采纳。详见 [`GOVERNANCE.md`](GOVERNANCE.md)。
