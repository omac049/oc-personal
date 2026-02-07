# Pollack Peace Building — Site Health Report

**Source:** [WordPress Site Health](https://pollackpeacebuilding.com/wp-admin/site-health.php)  
**Date captured:** 2026-02-07  
**Site:** https://pollackpeacebuilding.com

---

## Summary

| Severity   | Count | Status |
|-----------|-------|--------|
| Critical  | 2     | Action required |
| Recommended | 8   | Should address |
| **Hosting (Hostinger)** | PHP 8.3 | Not compatible with current WordPress — address in Phase 1 |

---

## Critical issues (prioritize first)

### 1. WPForms license expired  
**Category:** Security

- **Impact:** No plugin/addon updates, no security improvements, no support, limited access.
- **Action:** Log in at [WPForms account](https://wpforms.com/account/) and renew the license, or remove/replace WPForms if the client no longer uses it.
- **Owner:** Client (billing/account) or Consultant (if managing subscriptions).

### 2. Background updates not working as expected  
**Category:** Security

- **Impact:** WordPress core, plugins, and themes may not auto-update; increases security risk.
- **Likely cause:** Often related to loopback/REST API failures (see recommended items below). Fixing loopback and REST API usually improves background updates.
- **Action:** After resolving loopback/REST API (and any host restrictions), re-check Site Health. If still failing, review `wp-config.php` and host cron/update settings.
- **Owner:** Consultant + Host (Hostinger).

---

## Recommended improvements (8 items)

### 1. WordPress update available (6.9.1)  
**Category:** Performance / Security

- **Action:** In WP Admin → **Dashboard → Updates**, install WordPress 6.9.1. Prefer doing this in a maintenance window and after a backup.
- **Owner:** Consultant or Client (with backup).

### 2. Remove inactive plugins & update plugins  
**Category:** Security

- **Current:** 14 plugins need updates; 14 inactive plugins.
- **Action:**
  - Update all active plugins (Dashboard → Updates).
  - Delete inactive plugins that are not needed (WP Admin → Plugins; deactivate then delete). If unsure, deactivate only and document for client approval before deletion.
- **Reference:** See [SECURITY-AUDIT.md](./SECURITY-AUDIT.md) for plugin audit workflow.
- **Owner:** Consultant.

### 3. Have a default theme available  
**Category:** Security

- **Current:** 2 themes installed, both custom/active; no default (e.g. Twenty Twenty-Four).
- **Action:** Install one default theme (e.g. **Twenty Twenty-Four**) and leave it inactive. Used by WordPress as fallback if the active theme fails.
- **Owner:** Consultant.

### 4. Scheduled event failed (`action_scheduler_run_queue`)  
**Category:** Performance

- **Impact:** Scheduled tasks (e.g. some plugin automation, recurring jobs) may not run.
- **Common cause:** Loopback/cron blocked (e.g. 403 from host or security plugin). Fixing loopback often fixes this.
- **Action:** After fixing loopback requests (below), re-run Site Health. If still failing, check Hostinger cron and any “disable WP cron” / external cron setup.
- **Owner:** Consultant + Host.

### 5. REST API returned 403 Forbidden  
**Category:** Performance

- **Endpoint tested:** `https://pollackpeacebuilding.com/wp-json/wp/v2/types/post?context=edit`
- **Impact:** Block editor and other tools that rely on the REST API can break; also affects loopback and some plugins.
- **Possible causes:** Security plugin (e.g. Wordfence), host WAF/firewall, or `.htaccess` blocking `/wp-json/`.
- **Action:**
  - In Wordfence (or similar): allow REST API for logged-in users and/or whitelist `/wp-json`.
  - On Hostinger: check firewall/WAF rules for “block REST API” or similar and allow `/wp-json` for the site.
  - Check `.htaccess` for rules that block `wp-json`.
- **Owner:** Consultant.

### 6. Use a persistent object cache  
**Category:** Performance

- **Current:** Host supports Redis and Memcached.
- **Action:** Enable Redis or Memcached object cache (via Hostinger panel or support) and install the matching WordPress plugin (e.g. Redis Object Cache). Test in staging first if available.
- **Owner:** Consultant + Host (configuration).

### 7. Loopback request failed (403)  
**Category:** Performance

- **Impact:** Affects scheduled events, theme/plugin editor checks, and some Site Health tests (e.g. page cache detection).
- **Action:** Same as REST API (above): allow loopback to the site’s own URL (localhost or site URL). Check security plugin, host firewall, and “disable REST API” or “block loopback” options.
- **Owner:** Consultant.

### 8. Page cache not detected  
**Category:** Performance

- **Note:** Report states detection may be skewed by loopback request failure (403).
- **Action:** After loopback and REST API return 200, re-check Site Health. If the host or a plugin provides page cache, ensure cache headers (e.g. `cache-control`, `x-cache-enabled`) are present; if not, consider enabling Hostinger’s cache or a lightweight cache plugin.
- **Owner:** Consultant.

### 9. PHP version (Hostinger)  
**Category:** Compatibility / Security

- **Current:** Hostinger reports PHP 8.3 is not compatible with the current WordPress version.
- **Impact:** Can cause errors, warnings, or unexpected behavior; should be aligned for stability and security.
- **Action:** In Hostinger hPanel, set PHP to a version compatible with the WordPress release (e.g. PHP 8.1 or 8.2—check [WordPress PHP requirements](https://make.wordpress.org/core/handbook/references/php-compatibility-and-wordpress-versions/)). Typically: **Advanced → PHP Configuration** (or **PHP Version**), select the version for this site. Include in Phase 1 scope.
- **Owner:** Consultant + Client (hosting access).

---

## Suggested order of operations

1. **Immediate (security):**  
   - Renew or replace WPForms license.  
   - Fix REST API and loopback (403) so updates and cron can work.

2. **Next (updates & cleanup):**  
   - Backup site.  
   - **Set PHP version compatible with WordPress** (Hostinger: PHP 8.3 currently reported incompatible).  
   - Update WordPress to 6.9.1 and all plugins.  
   - Remove or document inactive plugins; delete those approved by client.  
   - Install a default theme (e.g. Twenty Twenty-Four) and leave inactive.

3. **Then (re-check & performance):**  
   - Re-run Site Health; confirm background updates, scheduled events, and page cache detection.  
   - Enable persistent object cache (Redis/Memcached) if approved.  
   - Verify page cache (host or plugin) and cache headers.

---

## Cross-reference

- **Security and plugin audit:** [SECURITY-AUDIT.md](./SECURITY-AUDIT.md)  
- **Project overview:** [START-HERE.md](./START-HERE.md)  
- **Client proposal:** [ppb-proposal.html](./ppb-proposal.html)

---

*Report captured from WordPress Site Health; actions are recommendations. Test in staging where possible and keep backups before making changes.*
