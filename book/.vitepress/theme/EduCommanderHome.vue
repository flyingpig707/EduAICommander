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
        <h2 id="use-title">把这本书交给你的 Agent。</h2>
        <p>想用好它，复制第一条指令；想参与写，复制第二条。剩下的交给 WorkBuddy、Claude、Codex 或任何具备联网阅读能力的 Agent。</p>
      </div>

      <div class="dual-prompts">
        <div class="dual-prompt">
          <h3>我要用：陪读 · 诊断 · 排课</h3>
          <div class="prompt-box">
            <code>{{ usePrompt }}</code>
            <button type="button" :aria-label="copied === 'use' ? '应用指令已复制' : '复制应用指令'" @click="copyPrompt('use', usePrompt)">{{ copied === 'use' ? '已复制' : '复制指令' }}</button>
          </div>
        </div>
        <div class="dual-prompt">
          <h3>我要参与写：提交教学实践提案</h3>
          <div class="prompt-box">
            <code>{{ coauthorPrompt }}</code>
            <button type="button" :aria-label="copied === 'coauthor' ? '参与指令已复制' : '复制参与指令'" @click="copyPrompt('coauthor', coauthorPrompt)">{{ copied === 'coauthor' ? '已复制' : '复制指令' }}</button>
          </div>
        </div>
      </div>
    </section>

    <section class="about-book" aria-labelledby="about-title">
      <p class="section-kicker">ABOUT THE BOOK & TOOLKIT</p>
      <h2 id="about-title">教师与所培养的人，<br />都要在AI时代成长为AI指挥官。</h2>
      <p>算力大通胀正在同时重写两条成长路径：教师如何教书，学生凭什么立足。《教育AI指挥官（高校版）》以“专业能力 × AI能力 × 商业与管理能力”三力融合模型作答，系统拆解新教法、新助手、新教材、新课程、新学段、新人才“六新”改革，并提供 13 页即拿即用的 A4 标准打印版教改与实训行动工具卡手册。</p>
      <div style="display: flex; gap: 28px; flex-wrap: wrap;">
        <a class="text-link" href="/00-%E5%B0%81%E9%9D%A2">查看全书目录</a>
        <a class="text-link" href="/13-%E9%99%84%E5%BD%95-%E8%A1%8C%E5%8A%A8%E5%B7%A5%E5%85%B7%E7%AE%B1%E6%80%BB%E9%9B%86">查看“十问十策”速查总表</a>
        <a class="text-link" href="/toolkit.html" target="_blank">打开 13 页 A4 打印版工具卡手册 ↗</a>
      </div>
    </section>
  </main>
</template>
