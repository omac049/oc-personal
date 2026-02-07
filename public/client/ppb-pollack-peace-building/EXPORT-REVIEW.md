# WordPress Export Review — Pollack Peace Building

**File:** `pollackpeacebuildingsystems.WordPress.2026-02-07.xml`  
**Export date:** 2026-02-07 16:47  
**Generator:** WordPress 6.1.9  
**Site:** https://pollackpeacebuilding.com

---

## What’s in the export

Standard WXR (WordPress eXtended RSS) export. It contains **content and taxonomy only** — no plugin list, no theme list, and no `wp_options` (e.g. active_plugins, template, stylesheet). Plugin/theme inference below is from post types, taxonomies, and post meta present in the file.

---

## Content summary

| Type            | Count | Notes |
|-----------------|-------|--------|
| **Pages**       | 298   | |
| **Posts**       | 608   | |
| **Nav menu items** | 180 | |
| **Attachments** | ~1,075+ | Images/media; many use BoldThemes image sizes |
| **ACF**         | 1 field group, 3 fields | Custom fields (e.g. page_link) |
| **Other**       | 1 `aiosrs-schema` | All in One Schema Rich Snippets |

---

## Plugins / themes inferred from export

Inferred from post types, taxonomies, and post meta only (not from a plugin/theme manifest).

| Inferred plugin/theme | Evidence in export |
|------------------------|--------------------|
| **WPForms**           | Taxonomy `wpforms_form_tag` |
| **BoldThemes** (theme) | Attachment metadata image sizes: `boldthemes_small`, `boldthemes_medium`, `boldthemes_large_*`, etc. |
| **Advanced Custom Fields (ACF)** | Post types `acf-field-group`, `acf-field` |
| **Rank Math SEO**     | Post meta `rank_math_robots`, `rank_math_news_sitemap_robots` |
| **Imagify**           | Post meta `_imagify_optimization_level`, `_imagify_status`, `_imagify_data` — at least one attachment shows error: *"You've consumed all your data. You have to upgrade your account to continue"* |
| **All in One Schema (AIOSRS)** | Post type `aiosrs-schema` |
| **WP Internal Linking (WPIL)** | Term meta `wpil_links_inbound_internal_count`, `wpil_sync_report3`, etc. on categories |
| **WPCode**            | Taxonomies `wpcode_location`, `wpcode_tags`, `wpcode_type` |
| **Portfolio**         | Taxonomy `portfolio_category` (likely theme or plugin) |

---

## Authors (from export)

| Login    | Display name   | Email |
|----------|----------------|--------|
| GSC Admin | GSC Admin     | admin@growthsciencecap.com |
| omarc    | omarc         | omar.webhosting@gmail.com |
| JeremyP  | Jeremy Pollack | jeremy@pollackpeacebuilding.com |

---

## Notable findings

1. **WordPress version in export:** 6.1.9 — Site Health reported 6.9.1 available; plan core update after backup.
2. **Imagify:** Export contains at least one attachment whose Imagify optimization failed due to data limit (“You've consumed all your data…”). Consider upgrading or pausing Imagify until quota is resolved.
3. **Celest + Celest child:** Client has Celest (parent) and a Celest child theme installed. Parent + child is the **recommended approach** — customizations go in the child and survive parent updates; always update the parent theme first. (BoldThemes may have been present in the export; confirm in Appearance → Themes.)
4. **WPForms:** Confirmed in use (form tags). Site Health reports expired license; renew or replace.
5. **No plugin/theme manifest:** The WXR does not include `active_plugins`, `template`, or `stylesheet`. For a full plugin/theme audit, use WP Admin → Plugins / Appearance → Themes, or a backup that includes the database (e.g. `wp_options`).

---

## Cross-reference

- **Site Health actions:** [SITE-HEALTH-REPORT.md](./SITE-HEALTH-REPORT.md)  
- **Security audit:** [SECURITY-AUDIT.md](./SECURITY-AUDIT.md)  
- **Proposal (includes Site Health summary):** [ppb-proposal.html](./ppb-proposal.html)
