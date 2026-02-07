# Pollack Peace Building — Security Project Summary

**Prepared for:** Pollack Peace Building (PPB)  
**Prepared by:** Omar Corral  
**Date:** February 7, 2026

---

## Executive Summary

Pollack Peace Building’s site (pollackpeacebuilding.com) has experienced **multiple bot attacks**. Cloudflare (free) is in place as a first line of defense. This project provides a **security audit and hardening plan** covering:

1. **WordPress and plugin hygiene** — updates, removal of unused/abandoned plugins, and reducing information leakage (e.g. hiding version).
2. **Security hardening** — strong logins, 2FA, limit login attempts, disable file editing, backups.
3. **Cloudflare (free)** — confirmation that Bot Fight Mode and Security level are used effectively.
4. **Additional security** — recommended next steps beyond Cloudflare free (e.g. Wordfence free, and optional paid options if attacks continue or budget allows).

Deliverables are a **detailed checklist** in `SECURITY-AUDIT.md` and this **executive summary** for quick reference and client communication.

---

## Key Recommendations at a Glance

| Priority | Action |
|----------|--------|
| **Immediate** | Update WordPress core, all plugins, and theme; remove unused plugins. |
| **Immediate** | Enable Cloudflare Bot Fight Mode and set Security level. |
| **Immediate** | Review & configure Wordfence (free) if already on site; install only if missing. Firewall, login lockout, 2FA for admins. |
| **Short term** | Hide WordPress version; review Cloudflare rules for `/wp-admin`; set up backups. |
| **Optional (paid)** | Cloudflare Pro for stronger bot control; Wordfence Premium for real-time WAF. |

---

## Confirmed Context

- **Bot attacks:** Login brute force, form/contact spam, DDoS
- **WordPress access:** Yes; client will provide WordPress export for audit
- **Hosting:** Hostinger (shared)
- **Budget:** Recommendations include free and paid options for client to choose
- **Data/compliance:** Contact form collects Name, Phone, Email, Message; recommend privacy policy and form spam protection (see SECURITY-AUDIT.md §2.1)

---

## Document Index

| Document | Purpose |
|----------|---------|
| `README.md` | Client overview and project scope |
| `START-HERE.md` | Navigation and next steps |
| `PROJECT-SUMMARY.md` | This executive summary |
| `SECURITY-AUDIT.md` | Full audit checklist and recommendations |
| `ppb-proposal.html` | Client-facing proposal (HTML) |

---

**Consultant:** Omar Corral  
**Email:** omar.webhosting@gmail.com  
**Website:** omar-corral.com
