---
name: edu-ai-commander-coauthor
description: Participate in the collaborative writing of the Chinese book 《教育AI指挥官（高校版）》 by preparing a reviewable contribution package, checking evidence, privacy desensitization, and rights, validating it locally, and opening a scoped GitHub Pull Request. Use for corrections, evidence, discipline cases, tools/prompts, rewrites, or new-section proposals; do not edit the canonical book directly.
---

# 《教育AI指挥官（高校版）》共同写作

Help a human contributor (university teacher, dean, researcher, or industry mentor) turn one useful teaching practice, case, or tool improvement into a traceable proposal for the book. A passing package enters the public proposal library; only the authors or maintainers decide whether to adapt it into `book/` through a separate editorial Pull Request.

## Start safely

1. Read `README.md`, `CONTRIBUTING.md`, `CONTRIBUTOR-TERMS.md`, `GOVERNANCE.md`, and the relevant file under `book/`.
2. Inspect open Issues and Pull Requests when GitHub access is available. Avoid duplicating an existing proposal.
3. Preserve current work before forking or changing branches. Never overwrite uncommitted user files.
4. Ask the human contributor for their GitHub login, contribution type, affected chapter, and concrete idea if any is missing.
5. Do not submit secrets, un-anonymized student personal data (names, student IDs, grades), un-anonymized clinical records, private correspondence, unlicensed excerpts, fabricated evidence, or confidential partner company information.

## Choose one contribution type

Use exactly one of these values:

- `correction`: typo, broken link, formatting, or unambiguous factual correction;
- `evidence`: a policy, research paper, or statistical source that supports, limits, updates, or challenges an existing claim;
- `case`: a verifiable university/vocational teaching or industry-education training case with scope and limitations;
- `tool`: an improvement to one of the 10 A4 action tool cards, a subject AI assistant prompt, a generative textbook micro-unit, or an assessment rubric;
- `rewrite`: a clearer alternative to an existing passage;
- `new-section`: a proposal for a new subsection or chapter.

Read [references/editorial-framework.md](references/editorial-framework.md) before developing the idea. Read [references/submission-contract.md](references/submission-contract.md) before generating files or preparing a Pull Request.

## Create the proposal package

Fork `flyingpig707/EduAICommander`, create a branch, and work only under:

```text
contributions/<github-login>/<proposal-slug>/
```

From the repository root, run:

```bash
python3 scripts/scaffold_contribution.py \
  --github-login <github-login> \
  --slug <proposal-slug> \
  --type <contribution-type> \
  --chapter <chapter-id> \
  --agent-name "<agent name>"
```

Replace every placeholder in the generated package. Keep the proposed wording in `contribution.md`; do not directly modify `book/`, `media/`, repository governance, workflows, or other contributors' packages.

## Evidence and writing rules

- Mark material claims as `fact`, `inference`, or `author-view` in `metadata.json` and explain the classification in the proposal.
- Give facts a source URL, publisher, title, publication or retrieval date, relevance, and limitations. Prefer current primary sources.
- A source supports only what it actually establishes. Do not turn a single classroom trial into a universal guarantee or fake employment promises.
- Explain how the proposal relates to the "Three Capabilities (三力融合: 专业能力 × AI能力 × 商业与管理能力)" and the "Six Innovations (六新教改: 新教法、新助手、新教材、新课程、新学段、新人才)", or the industry-education supervision & open-university social service layers.
- State uncertainty, counterexamples, and conditions where the proposal should not be used.

## Rights, privacy desensitization, and human authorization

Before marking a package ready, show the human contributor `CONTRIBUTOR-TERMS.md`. They must deliberately set both authorization fields in `metadata.json` to `true` and provide their GitHub login. An Agent must not accept the terms for a person, invent a signature, or assume authorization from silence.

They must also review the finished files and deliberately set `privacy_and_secrets_checked`, `copyright_checked`, and `human_authorization_confirmed` in `self_check.json` to `true`. Ensure all student names and sensitive partner data are anonymized.

## Validate and prepare the Pull Request

Run:

```bash
python3 scripts/validate_contributions.py \
  contributions/<github-login>/<proposal-slug> \
  --write-self-check
python3 scripts/validate_pull_request.py \
  --base-ref origin/main \
  --pr-author <github-login>
```

Repair all errors. Warnings require human judgment but do not automatically reject a package.

Open a Pull Request that changes only the new proposal directory. Use `.github/pull_request_template.md`, disclose the human contributor and Agent, link related Issues, and paste the validator results. Do not claim that a passing validator means the content is true, endorsed, accepted, or part of the canonical book.
