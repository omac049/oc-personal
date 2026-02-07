# Pollack Peace Building — Security Audit & Hardening

**Prepared for:** Pollack Peace Building (PPB)  
**Prepared by:** Omar Corral  
**Date:** February 7, 2026  
**Site:** https://pollackpeacebuilding.com/

---

## 1. Purpose

This document supports a **security review and hardening** of the Pollack Peace Building WordPress site after **multiple bot attacks**. It covers:

- **WordPress & plugin hygiene** — updates, cleanup, reducing attack surface  
- **Security hardening** — configuration and best practices  
- **Cloudflare (free)** — what it does and how to use it better  
- **Additional security** — recommendations beyond Cloudflare free (plugins, paid tiers, hosting)

Use this as a **checklist and reference** when you have access to the WordPress admin and/or hosting.

---

## 2. Confirmed Context (Client / Project)

| Item | Confirmed |
|------|-----------|
| **Bot attack types** | Login brute force, form/contact spam, DDoS. → Emphasize login hardening, WAF, rate limiting, and DDoS mitigation (Cloudflare). |
| **WordPress admin access** | Yes; client will provide WordPress export for plugin/theme audit. |
| **Hosting** | Hostinger, shared hosting. → Use plugin-level and Cloudflare controls; PHP version and backups via Hostinger or plugin. |
| **Budget** | Recommendations provided for both free and paid options; client to choose. |
| **Data / compliance** | Site has contact form (Name, Phone, Email, Message). See Section 2.1 for data & compliance notes. |

### 2.1 Data & Compliance (Site Review)

- **Contact form** (e.g. Contact / Request a Call Back) collects: Name, Phone, Email, Message.
- **Recommendations:**  
  - Ensure a **Privacy Policy** is published and linked (e.g. footer) explaining collection, use, and retention of form data.  
  - Use **HTTPS** for all forms (already in place if site is on SSL).  
  - Consider **form spam protection** (e.g. reCAPTCHA, hCaptcha, or Cloudflare Turnstile) to reduce contact spam and bot submissions.  
  - Avoid logging form submissions in plain text in publicly accessible locations; store in database or email only with access controls.
- No indication of payment or health data; standard B2B contact data handling and a clear privacy policy are the main compliance focus.

---

## 2.2 Findings from WordPress Export

*From `pollackpeacebuildingsystems.WordPress.2026-02-07.xml`. The export does not include plugin code or server config—only content and inferred plugin/theme usage.*

| Finding | Detail | Action (see checklist below) |
|--------|--------|------------------------------|
| **WordPress version** | Export shows 6.1.9 (outdated). | Update core to latest (§3.1, §7). |
| **User accounts** | 3 authors: GSC Admin (admin@growthsciencecap.com), omarc, JeremyP. **GSC Admin is intentional** — client uses this as shared admin for all their sites. | Confirm roles; strong passwords + 2FA (§4.1, §7). |
| **Comments** | Client confirmed: comments are off site-wide; 0 comments. Export showed some `comment_status` = open (legacy); **not a current issue**. | None unless you later enable comments. |
| **Version leakage** | Generator tag exposes WordPress version. | Hide version after update (§3.3, §7). |

**Note:** The WordPress WXR export does **not** include which plugins are Active or Inactive—that is stored in the database. The table below is inferred from **content and meta** in the export (post types, meta keys). **Confirm Active/Inactive in Dashboard → Plugins** and then apply the recommendation. Site Health reported **14 plugins need updates** and **14 inactive plugins**; use this table to audit each.

### 2.3 Plugin & theme inventory (from export)

Use this table in WP Admin → Plugins: for each row, confirm **Active** or **Inactive**, then **Keep & update**, **Remove**, or **Consolidate** as recommended.

| # | Plugin or theme | Evidence in export | Confirm in WP Admin | Recommendation |
|---|-----------------|--------------------|---------------------|-----------------|
| 1 | **Advanced Custom Fields (ACF)** | Post types: `acf-field`, `acf-field-group` | Active / Inactive | **Keep & update** if you use custom fields; else remove. |
| 2 | **All in One Schema Rich Snippets (BSF)** | Post type: `aiosrs-schema`; meta: `bsf-aiosrs-*` | Active / Inactive | **Consolidate:** If Rank Math or SASWP also active, use one schema solution only. Update or remove. |
| 3 | **AMP for WP** | Meta: `amp_*`, `ampforwp_*` | Active / Inactive | **Keep & update** if you use AMP; else **remove** to reduce surface. |
| 4 | **Beaver Builder (FL Builder)** | Meta: `_fl_builder_*` | Active / Inactive | **Keep & update** if you build pages with it; else remove. |
| 5 | **Bold Timeline** | Post type: `bold-timeline` (3 items) | Active / Inactive | **Keep & update** if timeline content is used; else remove. |
| 6 | **Classic Editor** | Meta: `classic-editor-remember` | Active / Inactive | **Keep & update** if you prefer classic editor; else remove. |
| 7 | **Duplicate Post** | Meta: `_dp_*` | Active / Inactive | **Remove** if unused (utility only); else keep & update. |
| 8 | **Easy Table of Contents (EZ TOC)** | Meta: `_ez-toc-*` | Active / Inactive | **Keep & update** if TOC is used on posts/pages; else remove. |
| 9 | **Elementor** (and possibly **Elementor Pro**) | Meta: `_elementor_*`, `_elementor_pro_version` | Active / Inactive | **Keep & update** (core to layout). Update both if Pro is active. |
| 10 | **Header Footer** (e.g. Header Footer for Elementor) | Meta: `hefo_*` | Active / Inactive | **Keep & update** if used for global header/footer; else remove. |
| 11 | **Imagify** | Meta: `_imagify_*` on attachments | Active / Inactive | **Keep & update** if you use it for images; else remove. |
| 12 | **LifterLMS** | Post type: `llms_txt` | Active / Inactive | **Keep & update** if you run courses; else **remove** (large surface). |
| 13 | **Rank Math SEO** | Meta: `rank_math_*` (many keys) | Active / Inactive | **Consolidate:** If Yoast is also active, **keep one, remove the other**. Then keep & update. |
| 14 | **SASWP** (Schema & Structured Data for WP) | Post type: `saswp`; meta: `saswp_*` | Active / Inactive | **Consolidate:** If All in One Schema or Rank Math schema is used, use one only. Update or remove. |
| 15 | **Smush** (image optimization) | Meta: `wp-smush-*`, `wp-smpro-smush-*` | Active / Inactive | **Keep & update** if used; if Imagify also active, consider one image optimizer only. |
| 16 | **WP Internal Links** (Link Whisper / wpil) | Term meta: `wpil_*` | Active / Inactive | **Keep & update** if you use internal linking; else remove. |
| 17 | **WPForms** | Meta: `wpforms_form_locations` | Active / Inactive | **Keep & update** (forms in use). Fix license (Site Health critical). |
| 18 | **Yoast SEO** | Meta: `_yoast_wpseo_*` | Active / Inactive | **Consolidate:** If Rank Math is also active, **keep one, remove the other**. Then keep & update. |
| — | **Celest** (parent theme) | Client confirmed | Active | **Keep & update.** Parent + child is the recommended way to customize a theme; update parent first. |
| — | **Celest child** (child theme) | Client confirmed | Active | **Keep & update.** Customizations go here; they survive parent updates. |
| — | **Bold Themes** (theme, if still present) | Meta: `boldthemes_*`; portfolio | — | If replaced by Celest, remove; else keep & update. |
| — | **Primer** (possible theme) | Meta: `primer_layout` | — | Confirm in Appearance; if unused theme, remove. |
| — | **Default theme** (e.g. Twenty Twenty-Four) | — | Install if missing | Install one default theme and leave inactive as fallback. |

**Summary recommendations**

- **Consolidate SEO/schema:** Use **one** of: Rank Math, Yoast, All in One Schema, SASWP for SEO/schema. Remove or disable the others to reduce surface and conflicts.
- **Consolidate image optimization:** If both **Imagify** and **Smush** are active, keep one and remove the other.
- **Remove** any plugin that is **Inactive** and not needed (confirm with client before deleting).
- **Update** every **Active** plugin (and the active theme) before anything else.

**Post types in export (for reference):** `post`, `page`, `attachment`, `nav_menu_item`, `acf-field`, `acf-field-group`, `aiosrs-schema`, `bold-timeline`, `llms_txt`, `portfolio`, `saswp`, `wp_navigation`, `custom_css`.

---

## 3. WordPress & Plugin Cleanup

### 3.1 Core, Themes, and Plugins — Updates

- [ ] **WordPress core** — Update to latest stable. Check: Dashboard → Updates.
- [ ] **All plugins** — Update every plugin. Remove any you no longer use.
- [ ] **Active theme** — Update to latest. If using a **parent + child theme** (e.g. Celest + Celest child), this is the **recommended setup**: customizations (CSS, template overrides, functions) live in the child and survive parent updates; never edit the parent directly. Always **update the parent theme first**, then test the site with the child active.
- [ ] **PHP version** — Use PHP 8.0+ if hosting allows (better performance and security).

**Why:** Outdated core/plugins/themes are the main source of known vulnerabilities that bots and scanners exploit.

### 3.2 Plugin Cleanup

- [ ] **Deactivate and delete** unused plugins. Even inactive plugins can contain vulnerable code.
- [ ] **Audit each active plugin:**  
  - Is it from a reputable source (wordpress.org or known vendor)?  
  - Last updated recently?  
  - Known CVEs? (Check plugin changelog or run a scanner — see Section 6.)
- [ ] **Replace abandoned plugins** (not updated in 1–2+ years) with maintained alternatives.
- [ ] **Avoid “nulled” or pirated** themes/plugins; they often include backdoors.

### 3.3 Reduce Information Leakage

- [ ] **Hide WordPress version** in front-end (e.g., generator meta, query strings on CSS/JS).  
  - Options: plugin (e.g. “Remove Version Info”, “Meta Generator and Version Info Remover”) or theme `functions.php`:  
    `remove_action('wp_head', 'wp_generator');`  
  - Hiding version is a best practice so automated scanners can’t easily match version → known CVE.
- [ ] **Disable or restrict** `wp-json` REST API if not needed for the site (can reduce enumeration).

---

## 4. Security Hardening (WordPress & Server)

### 4.1 Logins & Admin

- [ ] **Strong passwords** for all users, especially administrators.
- [ ] **Two-factor authentication (2FA)** for all admin/logins (plugin: e.g. Wordfence, or dedicated 2FA plugin).
- [ ] **Limit login attempts** — block IPs after X failed logins (Wordfence, Limit Login Attempts, etc.).
- [ ] **Rename or hide** `/wp-admin` / `wp-login.php` if you’re comfortable (some security plugins offer this).
- [ ] **Disable file editing** in admin: in `wp-config.php` add  
  `define('DISALLOW_FILE_EDIT', true);`

#### How to implement: Disable file editing

This removes the **Theme Editor** and **Plugin Editor** from WordPress admin (Appearance → Theme File Editor, Plugins → Plugin File Editor). Users can still edit content (posts, pages) and use the Customizer; they just can’t edit theme/plugin PHP/CSS files from the dashboard. That limits damage if an admin account is compromised and prevents accidental breakage.

**Steps:**

1. **Back up `wp-config.php`**  
   Download a copy via Hostinger File Manager or FTP/SFTP before changing anything.

2. **Open `wp-config.php`**  
   - **Hostinger:** hPanel → **Files** → **File Manager** → go to the site root (often `public_html` or the folder for pollackpeacebuilding.com) → right‑click `wp-config.php` → **Edit** (or **Code Edit**).  
   - **FTP/SFTP:** Connect with FileZilla or similar, go to the WordPress root, download `wp-config.php`, edit locally, then re-upload (overwrite). Prefer SFTP if your host supports it.

3. **Add the constant above “That’s all, stop editing!”**  
   Find the line that says:

   ```php
   /* That's all, stop editing! Happy publishing. */
   ```

   **Above** that line, add (on its own line):

   ```php
   define( 'DISALLOW_FILE_EDIT', true );
   ```

   So it looks like:

   ```php
   define( 'DISALLOW_FILE_EDIT', true );

   /* That's all, stop editing! Happy publishing. */
   ```

   Use single quotes, a space after `define`, and no space before the semicolon if you prefer; WordPress accepts `define('DISALLOW_FILE_EDIT', true);` as well.

4. **Save the file**  
   In File Manager: Save and close. Via FTP: upload the modified file and overwrite the old one.

5. **Confirm**  
   Log into WordPress admin. **Appearance → Theme File Editor** and **Plugins → Plugin File Editor** should be gone or show “File editing is disabled.” Content editing (posts, pages, blocks) is unchanged.

**If you break the file:** A syntax error in `wp-config.php` can show a blank or error page. Restore your backup (re-upload the saved copy) and fix the edit. No trailing comma after `true);` and no stray characters.

**Reverting:** Remove the `define( 'DISALLOW_FILE_EDIT', true );` line and save to turn the theme/plugin editors back on.

### 4.2 Configuration

- [ ] **Unique `WP_AUTH_KEY` and related salts** in `wp-config.php` (generate new ones if default or old).
- [ ] **`wp-config.php`** — Not under web root if possible; correct file permissions (e.g. 640).
- [ ] **Directory listing** — Disabled on server (e.g. `Options -Indexes` in Apache).

### 4.3 Backups

- [ ] **Automated backups** (hosting or plugin: UpdraftPlus, BackupBuddy, host backup).
- [ ] **Off-site backup** (different provider or cloud) and tested restore.

---

## 5. Cloudflare (Free) — What You Have & How to Use It

Cloudflare free already gives you:

- **DDoS protection** (L3/L4/L7) — unmetered.
- **Bot Fight Mode** — challenges known bad bots; can help with crawler/scraper abuse.
- **Real-time DDoS alerts** (when CF detects and mitigates).

**Recommended checks:**

- [ ] **Bot Fight Mode** — In CF dashboard: Security → Bots → Bot Fight Mode **On**.
- [ ] **Security level** — Security → Settings: consider “Medium” or “High” for `/wp-admin` and `wp-login.php` (or use a Page Rule / Rule Set to only tighten those paths).
- [ ] **Challenge passage** — Set a reasonable “Challenge Passage” (e.g. 30 min) so legitimate users aren’t challenged too often.
- [ ] **Firewall rules (free)** — If you see repeated bad IPs or paths (e.g. `/wp-admin` from specific countries), add simple “Block” or “Challenge” rules.
- [ ] **Rate limiting (free tier)** — Limited rules; use for critical paths (e.g. login URL) if available.

**Limitations of free:**

- **Super Bot Fight Mode** and more advanced bot controls (e.g. “Definitely automated” vs “Verified bots”) are on **paid plans** (Pro and above).
- More advanced WAF rules and rate limiting are expanded on paid tiers.

So: **Cloudflare free is a solid first line**; we’re recommending **additional layers** (below) for bot-heavy attacks and WordPress-specific risks.

---

## 6. Additional Security Recommendations (Beyond Cloudflare Free)

### 6.1 WordPress Security + Firewall Plugins (Recommended)

Pick **one** primary security plugin to avoid conflicts:

| Option | Best for | Notes |
|--------|----------|--------|
| **Wordfence (free)** | WAF, malware scan, login security, 2FA | Very popular; firewall + scan + login lockout. Premium adds real-time rule updates. |
| **Sucuri (free)** | Hardening, audit logging, malware scan | Good hardening checklist; optional paid WAF. |
| **Jetpack Protect (free)** | Simple vulnerability scan | Uses WPScan DB; lightweight; no WAF. |

**Recommendation:**  
- **Wordfence (free)** as the main addition: firewall, login lockout, 2FA, and malware scan.  
- If the client wants **vulnerability-only** scanning with minimal footprint, **Jetpack Protect** or **WPScan** plugin (free, limited API on free tier) can supplement.

### 6.2 Bot & Login Attack Focus

- **Wordfence** — Brute force protection, optional reCAPTCHA on login, 2FA.
- **Cloudflare Pro (paid)** — Super Bot Fight Mode, more WAF/rate limiting; consider if bot attacks continue and budget allows.
- **Rate limiting** — On Cloudflare (if available on free) or via Wordfence/hosting for `wp-login.php` and REST API.

### 6.3 Vulnerability Scanning (Optional)

- **WPScan** (plugin or CLI) — Checks core, plugins, themes against known CVE DB.  
- **Jetpack Protect** — Free, uses WPScan data.  
- Run periodically (e.g. weekly) and after every plugin/theme update.

### 6.4 If Attacks Continue or Budget Allows

- **Cloudflare Pro** — Super Bot Fight Mode, more WAF rules, better rate limiting.
- **Wordfence Premium** — Real-time firewall rule updates, priority support.
- **Managed WordPress hosting** — Often includes WAF, malware scan, and hardened PHP/server (e.g. WP Engine, Kinsta, SiteGround).

---

## 7. Quick Priority Checklist

**Immediate (do first):**

1. Update WordPress core, all plugins, active theme.  
2. **PHP version compatibility** — Hostinger reports PHP 8.3 not compatible with current WordPress. Set PHP (hPanel → Advanced → PHP Configuration) to a version compatible with the WordPress release (e.g. 8.1 or 8.2 per [WordPress PHP requirements](https://make.wordpress.org/core/handbook/references/php-compatibility-and-wordpress-versions/)).  
3. Remove unused/abandoned plugins.  
4. Enable Cloudflare Bot Fight Mode and set a sensible Security level.  
5. Review and configure **Wordfence (free)** (or Sucuri) if already installed; install only if missing. Ensure firewall on, login lockout, 2FA for admins.  
6. Strong passwords + 2FA for all users with login access.  
7. Add `DISALLOW_FILE_EDIT` in `wp-config.php`.

**Short term:**

8. Hide WordPress version (plugin or code).  
9. Review Cloudflare firewall/rate limiting for `/wp-admin` and `wp-login.php`.  
10. Set up automated backups and one off-site backup.  
11. Schedule recurring vulnerability scans (e.g. weekly).

**If budget allows:**

12. Consider **Cloudflare Pro** for stronger bot control.  
13. Consider **Wordfence Premium** for real-time WAF rules.  
14. Consider **managed WordPress hosting** if currently on unmanaged shared hosting.

---

## 8. Summary

- **WordPress & plugins:** Keep everything updated; **align PHP version with WordPress** (Hostinger: PHP 8.3 reported incompatible—set via hPanel). Remove unused/abandoned plugins, hide version.  
- **Hardening:** Strong logins, 2FA, limit login attempts, disable file editing, backups.  
- **Cloudflare (free):** Use Bot Fight Mode and Security level; add simple firewall/rate rules where possible.  
- **Additional security:** Review/configure **Wordfence (free)** (or Sucuri) if already on site; install only if missing. WAF, scan, and login protection; optionally Jetpack Protect or WPScan for vulnerability scanning.  
- **If bot attacks persist:** Consider **Cloudflare Pro** and/or **Wordfence Premium**, and reassess hosting.

Once you have answers to the **clarifying questions** in Section 2 (type of attacks, access, hosting, budget), you can narrow these to a client-specific action plan and, if needed, a short “Security Recommendations” summary for the client.

---

**Consultant:** Omar Corral  
**Email:** omar.webhosting@gmail.com  
**Website:** omar-corral.com
