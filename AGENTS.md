## Learned User Preferences

- Keep invoice payment details out of committed config: use `.env.invoicing` locally and GitHub Actions repository secrets in CI, not `value` fields in `scripts/invoicing/clients.json`.
- Validate invoice automation against production by running the invoice GitHub Actions workflow manually (`workflow_dispatch`) when needed.
- For main portfolio / marketing UI work, favor composition-first, restrained layouts (strong hero hierarchy, sparse copy, minimal decorative chrome) rather than generic card grids.
- Prefer short, minimal copy on generated invoice line items (avoid long boilerplate in HTML invoices).
- For portfolio marketing copy, prefer an authority-first tone that establishes expertise and explains the work; avoid hard-sell positioning.
- When presenting services on the main site, favor weaving them strategically through the narrative (homepage and key sections) rather than relying on a standalone services page as the primary pattern.

## Learned Workspace Facts

- Portfolio is a Next.js 15 app built with static export and deployed to GitHub Pages at `omar-corral.com`; GitHub source repo is `omac049/oc-personal`.
- With `output: 'export'`, Next.js server-only features (`headers()`, API routes, middleware) do not apply on GitHub Pages; configure things like security headers at the CDN/DNS layer if required. The contact form uses Formspree from the client; any CSP (e.g. `connect-src` in `layout.tsx`) must allow `https://formspree.io` or submissions fail.
- Monthly invoices are generated from `scripts/invoicing/` (config, template, `generate.js`, email helper) and `.github/workflows/invoice.yml`, which runs on a schedule (3rd of each month, 09:00 UTC) and supports manual runs; the generator bills the **previous** billing cycle (not the current month). Output HTML is under `public/client/` and counters live in `scripts/invoicing/clients.json`.
- The generator expects payment strings via `PAYMENT_ZELLE`, `PAYMENT_ACH`, and `PAYMENT_WIRE`; the workflow also uses `SMTP_USERNAME` and `SMTP_PASSWORD` for client notification email.
- Optional repo-root `.env.invoicing` is loaded for local invoice runs and is covered by `.env*` gitignore rules.
- For workflows that commit back to the default branch, repository **Actions → General → Workflow permissions** must allow **Read and write** so `GITHUB_TOKEN` can push.
- The invoice workflow uses GitHub Environment **`env_invoicing`**: define secrets named `PAYMENT_ZELLE`, `PAYMENT_ACH`, `PAYMENT_WIRE`, `SMTP_USERNAME`, and `SMTP_PASSWORD` (the workflow does not read a single bundled `ENV_INVOICING` secret).
- Pushes made with the default `GITHUB_TOKEN` inside Actions do not trigger other workflows on that push; chaining a deploy may use the API to dispatch a workflow (e.g. `workflow_dispatch` / `gh workflow run deploy.yml`) with job permissions including **`actions: write`**.
- The repo spans three concerns: the public marketing site (Next.js portfolio deployed to `omar-corral.com`), the Docusaurus SEO resources subsite under `seo-resources/` (free SEO basics), and in-repo client operations such as invoicing under `scripts/invoicing/`.
- The active “Signal” redesign direction (black/white/signal-green palette, DM Serif Display + Inter, signal-O mark, fixed top nav, generative hero grid) is written up in `docs/superpowers/specs/2026-05-06-signal-rebrand-design.md`.
