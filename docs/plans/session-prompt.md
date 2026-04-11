# Session Prompt Template

Copy the prompt below. Change **[A]** to the concept you are building this session (`A`, `B`, or `C`). Paste it as the first message in a new Claude Code session.

---

```
Start a One33 concept homepage session for Concept [A].

Step 1 — Read these plan files in full before doing anything else:
- docs/plans/00-shared.md
- docs/plans/concept-[a].md

Step 2 — Load and read these skills before writing any code:
- frontend-design
- shadcn
- next-best-practices
- web-design-guidelines

Step 3 — Read these project docs for brand and content context:
- docs/design/brand-direction.md
- docs/design/logo-direction.md
- docs/design/reference-reports/white-desert-design-report-overview.md
- docs/structure-decisions.md
- docs/discovery/session-1-notes.md
- docs/discovery/context-framework-first-draft-copy-feedback.md

Step 4 — Explore existing concept HTML files in docs/concepts/ as design references. Do not use their content — only their visual approach.

Step 5 — Check what shadcn components are already installed in components/ui/. Install any missing shared components listed in 00-shared.md.

Step 6 — Build everything described in both plan files. Follow the project structure exactly as specified in 00-shared.md. Do not deviate from the file layout.

Step 7 — Run `pnpm exec ultracite fix` and confirm no errors before finishing.

The definition of done is in 00-shared.md and concept-[a].md. Do not mark this session complete until all criteria are met.
```

---

## Notes

- Change `[A]` and `[a]` in the prompt (one is uppercase for the heading, one is lowercase for the file path)
- Session 1 (Concept A) also creates stub files for B and C so the switcher compiles — this is noted in `concept-a.md`
- Sessions B and C assume A is already complete — if starting fresh, run A first

