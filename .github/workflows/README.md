# GitHub Actions Workflows

## deploy.yml

Runs on every push to `main` and on manual dispatch.

**Jobs**

| Job | Steps | Notes |
|-----|-------|-------|
| `build` | Typecheck → Lint → Build (Next.js + Docusaurus) → Upload artifact | Single runner; npm cache via `setup-node` |
| `deploy` | Deploy to GitHub Pages | Requires `build` to pass; skipped on non-main branches |

Concurrency group `pages` with `cancel-in-progress: true` — rapid pushes cancel the previous in-flight deploy automatically.

**Runtime targets:** Node.js 22, Ubuntu latest

**Live site:** [omar-corral.com](https://omar-corral.com)

---

## invoice.yml

Runs on the 3rd of each month at 09:00 UTC, or manually via `workflow_dispatch`.

**Steps**

1. Generate invoice HTML from `scripts/invoicing/generate.js`
2. Commit output to `public/client/` and increment counters in `scripts/invoicing/clients.json`
3. Trigger `deploy.yml` to publish the updated client folder
4. Email the invoice to the client via SMTP

**Environment:** `env_invoicing`

**Required secrets:** `PAYMENT_ZELLE`, `PAYMENT_ACH`, `PAYMENT_WIRE`, `SMTP_USERNAME`, `SMTP_PASSWORD`

**Manual dry-run:** set `dry_run: true` in workflow dispatch — previews output without writing files or sending email.

---

## Local quality gate

```bash
npm run ci:local
# runs: lint → typecheck (main) → typecheck (seo-resources) → next build
```
