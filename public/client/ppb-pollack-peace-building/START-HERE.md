# Pollack Peace Building (PPB) — Start Here

**Quick Navigation Guide**

---

## Current Status: Security Audit & Hardening + Site Health

**Site:** https://pollackpeacebuilding.com/  
**Focus:** WordPress/plugin cleanup, security hardening, bot-attack mitigation, Site Health critical/recommended fixes.

---

## Quick Links

| Document | Purpose |
|----------|---------|
| [README.md](./README.md) | Client overview and project scope |
| [PROJECT-SUMMARY.md](./PROJECT-SUMMARY.md) | Executive summary of security project |
| [SECURITY-AUDIT.md](./SECURITY-AUDIT.md) | Full security audit checklist and recommendations |
| [SITE-HEALTH-REPORT.md](./SITE-HEALTH-REPORT.md) | WordPress Site Health report and action items |
| [EXPORT-REVIEW.md](./EXPORT-REVIEW.md) | WordPress export review (content + inferred plugins/themes) |
| [ppb-proposal.html](./ppb-proposal.html) | Client-facing proposal (open in browser) |

---

## Client / Site Info at a Glance

**Pollack Peace Building**
- Workplace conflict resolution consulting
- Site: pollackpeacebuilding.com
- Contact: support@pollackpeacebuilding.com | (800) 650-1429
- Context: Bot attacks (login brute force, form spam, DDoS); Cloudflare (free) in place; Hostinger shared

---

## Next Steps

1. **Site Health (critical):** Fix WPForms license and REST API/loopback 403 (see [SITE-HEALTH-REPORT.md](./SITE-HEALTH-REPORT.md)).
2. ~~Receive WordPress export from client~~ — Done. Export received for plugin/theme inventory.
3. Run plugin/theme audit and apply updates (see SECURITY-AUDIT.md).
4. Implement immediate items: Cloudflare Bot Fight Mode, Wordfence review/config (free; may already be on site), 2FA, backups.
5. Present **ppb-proposal.html** to client; use SECURITY-AUDIT.md and SITE-HEALTH-REPORT.md as working checklists.
6. Recommend paid options (Cloudflare Pro, Wordfence Premium) if attacks continue or client wants stronger protection.

---

## Files in This Folder

```
ppb-pollack-peace-building/
├── README.md              ← Client overview
├── START-HERE.md          ← This file
├── PROJECT-SUMMARY.md     ← Executive summary
├── SECURITY-AUDIT.md      ← Full security audit & recommendations
├── SITE-HEALTH-REPORT.md  ← Site Health report & action items
├── EXPORT-REVIEW.md             ← WordPress export review
└── ppb-proposal.html           ← Client-facing proposal (HTML)
```

---

**Consultant:** Omar Corral  
**Email:** omar.webhosting@gmail.com  
**Website:** omar-corral.com
