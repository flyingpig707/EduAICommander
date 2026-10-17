<script setup lang="ts">
import { ref } from 'vue'

const usePrompt = '阅读 https://github.com/flyingpig707/EduAICommander/tree/main/skills/edu-ai-commander-companion 并加载《教育AI指挥官（高校版）》应用技能包，把这本书作为我的教改与实训工作手册'
const coauthorPrompt = '阅读 https://github.com/flyingpig707/EduAICommander/tree/main/skills/edu-ai-commander-coauthor 并参与《教育AI指挥官（高校版）》共同写作'

const copied = ref('')

const capabilities = [
  { number: '01', title: '三力融合底座', description: '专业能力立身 × AI九段杠杆 × 十步问道闭环，培养“自用之才”。' },
  { number: '02', title: '六新课堂重构', description: '新教法、新助手、新教材、新课程，让教师成为八段“AI领学官”。' },
  { number: '03', title: '产教过程监理', description: '5天/3周实训样板 + 80分企业准入审计 + ISO9000全景数字监理。' },
  { number: '04', title: '大学开门办学', description: '面向政务医疗、区域企业、人社就业与教育出海输出终身AI更新。' },
]

async function copyPrompt(kind: string, text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const input = document.createElement('textarea')
    input.value = text
    input.setAttribute('readonly', '')
    input.style.position = 'fixed'
    input.style.opacity = '0'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.remove()
  }
  copied.value = kind
  window.setTimeout(() => { copied.value = '' }, 2400)
}

const useModes = [
  { number: '01', title: '陪读答疑', description: '按章引用、解释“三力融合”“六新”“九段×十步”等核心概念，为校领导生成决策简报。' },
  { number: '02', title: '教改诊断', description: '用十维自检表与“三力融合”诊断卡，现场体检你的专业，产出单页诊断与下一步三件事。' },
  { number: '03', title: '课堂与实训设计', description: '90分钟四步课堂改造、学科AI助手压测、5天/3周实训排课，直接生成可用的排课表与量规。' },
]

const useSteps = [
  { number: '01', title: '复制上面那条指令', description: '发给 WorkBuddy、Claude、Codex 或任何具备联网阅读能力的 Agent。' },
  { number: '02', title: 'Agent 加载书稿技能包', description: '它会从 GitHub 读取正式书稿与十大工具卡，不改动任何原文。' },
  { number: '03', title: '说出你的课程或专业', description: '陪读、诊断、改造、排课——按你的真实场景拿到可执行方案。' },
]

const steps = [
  { number: '01', title: '说出教学实践', description: '把你在本专业的课堂改造、智能体压测或实训观察交给 Agent。' },
  { number: '02', title: 'Agent 阅读与整理', description: '阅读书稿与“三力×六新”框架，确认贡献类型，生成结构化提案。' },
  { number: '03', title: 'Agent 脱敏与自检', description: '检查路径、字段、师生隐私脱敏、授权声明与正式书稿保护。' },
  { number: '04', title: '提交人工评审', description: '准备 Pull Request，进入公开提案库，等待作者与高校同行评审。' },
]
</script>

<template>
  <main class="breakthrough-home">
    <section class="signal-hero" aria-labelledby="home-title">
      <div class="signal-hero__copy">
        <div class="eyebrow-row">
          <span>AI COMMANDER FOR HIGHER EDUCATION</span><span class="eyebrow-rule" aria-hidden="true"></span><span>开放共写 · 面向未来的大学</span>
        </div>
        <h1 id="home-title"><strong>成为AI指挥官，培养AI指挥官</strong><span>高校高职的AI实训指南</span></h1>
        <p class="signal-hero__tagline">高校与高职的 AI 教改、实训与开门办学指南</p>
        <p class="signal-hero__authors">刘继军 · 吴鹏 等 著</p>
        <div class="signal-actions">
          <a class="signal-button signal-button--primary" href="/01-%E5%BA%8F%E8%A8%80%E4%B8%8E%E5%86%B3%E7%AD%96%E8%80%85%E5%AF%BC%E8%AF%BB">开始阅读</a>
          <a class="signal-button signal-button--secondary" href="/toolkit.html" target="_blank">🖨️ A4行动工具卡</a>
          <a class="signal-button signal-button--secondary" href="#use">用 Agent 把书用起来</a>
        </div>
      </div>

      <div class="signal-hero__visual">
        <img src="/assets/ai-commander-capabilities.png" alt="AI指挥官三大核心能力模型：商业能力、AI能力与专业能力三力融合，AI指挥官等于指挥型人才" />
        <p class="visual-kicker">THREE CAPABILITIES<br />× SIX INNOVATIONS</p>
      </div>
    </section>

    <section class="capability-strip" aria-label="教育AI指挥官四大支柱">
      <article v-for="capability in capabilities" :key="capability.number" class="capability-item">
        <span class="section-number">{{ capability.number }}</span>
        <div><h2>{{ capability.title }}</h2><p>{{ capability.description }}</p></div>
      </article>
    </section>

    <section id="use" class="coauthor-section use-section" aria-labelledby="use-title">
      <div class="coauthor-heading">
        <p class="section-kicker">USE IT WITH YOUR AGENT</p>
        <h2 id="use-title">把这本书交给你的 Agent，教改工具直接用起来。</h2>
        <p>多数读者要的不是“参与写书”，而是“把书用好”。复制下面这条指令发给你的 Agent（WorkBuddy、Claude、Codex 均可），它会加载书稿技能包，陪你读、帮你诊断、替你排课。</p>
      </div>

      <div class="coauthor-workflow">
        <div class="prompt-box">
          <code>{{ usePrompt }}</code>
          <button type="button" :aria-label="copied === 'use' ? '应用指令已复制' : '复制应用指令'" @click="copyPrompt('use', usePrompt)">{{ copied === 'use' ? '已复制' : '复制应用指令' }}</button>
        </div>

        <ol class="coauthor-steps use-steps-grid">
          <li v-for="step in useSteps" :key="step.number">
            <span class="step-number">{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.description }}</p>
          </li>
        </ol>

        <div class="use-modes">
          <article v-for="mode in useModes" :key="mode.number" class="use-mode-item">
            <span class="section-number">{{ mode.number }}</span>
            <div><h3>{{ mode.title }}</h3><p>{{ mode.description }}</p></div>
          </article>
        </div>

        <div class="contribution-types">
          <span>四种用法</span><p>陪读答疑 · 教改诊断 · 课堂改造 · 实训与学段设计（详见技能包 <code>skills/edu-ai-commander-companion</code>）</p>
        </div>
      </div>
    </section>

    <section id="coauthor" class="coauthor-section coauthor-section--light" aria-labelledby="coauthor-title">
      <div class="coauthor-heading">
        <p class="section-kicker">AGENT-NATIVE COAUTHORING</p>
        <h2 id="coauthor-title">想参与写？把你的教学实践变成提案。</h2>
        <p>少数同行会想参与共同写作。无需整理格式、研究规则或熟悉 GitHub，Agent 会帮助你阅读书稿、对齐“三力融合×六新教改”框架、完成师生隐私脱敏自检并准备 Pull Request。</p>
      </div>

      <div class="coauthor-workflow">
        <div class="prompt-box">
          <code>{{ coauthorPrompt }}</code>
          <button type="button" :aria-label="copied === 'coauthor' ? '参与指令已复制' : '复制参与指令'" @click="copyPrompt('coauthor', coauthorPrompt)">{{ copied === 'coauthor' ? '已复制' : '复制参与指令' }}</button>
        </div>

        <ol class="coauthor-steps">
          <li v-for="step in steps" :key="step.number">
            <span class="step-number">{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.description }}</p>
          </li>
        </ol>

        <div class="contribution-types">
          <span>你可以这样参与</span><p>勘误 · 政策与研究证据 · 各学科教改与实训案例 · A4工具卡与Prompt改进 · 段落改写 · 新章节提案</p>
        </div>

        <nav class="coauthor-links" aria-label="共同写作延伸入口">
          <a href="https://github.com/flyingpig707/EduAICommander/tree/main/skills/edu-ai-commander-coauthor">阅读 Agent Skill</a>
          <a href="https://github.com/flyingpig707/EduAICommander/issues/new?template=contribution-idea.yml">先讨论一个想法</a>
          <a href="https://github.com/flyingpig707/EduAICommander/tree/main/contributions">查看公开提案库</a>
        </nav>
      </div>
    </section>

    <section class="about-book" aria-labelledby="about-title">
      <p class="section-kicker">ABOUT THE BOOK & TOOLKIT</p>
      <h2 id="about-title">教师自身要成长为AI指挥官，<br />培养适应人机共生时代的指挥官人才。</h2>
      <p>《教育AI指挥官（高校版）》从百万 Token 算力大通胀切入，提出“专业能力 × AI能力 × 商业与管理能力”三力融合模型，系统拆解新教法、新助手、新教材、新课程、新学段、新人才“六新”改革，并提供 13 页即拿即用的 A4 标准打印版教改与实训行动工具卡手册。</p>
      <div style="display: flex; gap: 28px; flex-wrap: wrap;">
        <a class="text-link" href="/00-%E5%B0%81%E9%9D%A2">查看全书目录</a>
        <a class="text-link" href="/13-%E9%99%84%E5%BD%95-%E8%A1%8C%E5%8A%A8%E5%B7%A5%E5%85%B7%E7%AE%B1%E6%80%BB%E9%9B%86">查看“十问十策”速查总表</a>
        <a class="text-link" href="/toolkit.html" target="_blank">打开 13 页 A4 打印版工具卡手册 ↗</a>
      </div>
    </section>
  </main>
</template>
