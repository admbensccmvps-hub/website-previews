# Preview QA Report — P0001

Generated: 2026-08-11 | Expires: 2026-09-10 | Source: `E:\SUPPORT2$\CODEX PROJECTS\WEBSITE CREATION PROJECTS\AI WEBSITES\data\prospects.csv`

## Claims substituted from source data

| Field | Value used | Source | Observed |
|---|---|---|---|
| business_name (business_name) | Fixture Fresh Start Cleaning | https://maps.example.invalid/fixture-p0001 (fixture — non-resolving placeholder URL) | 2026-08-05 |
| phone_tel (phone) | +15550100199 | https://maps.example.invalid/fixture-p0001 (fixture — non-resolving placeholder URL) | 2026-08-05 |
| phone_display (phone) | (555) 010-0199 | https://maps.example.invalid/fixture-p0001 (fixture — non-resolving placeholder URL) | 2026-08-05 |
| address_street (address) | 456 Fixture Ave | https://maps.example.invalid/fixture-p0001 (fixture — non-resolving placeholder URL) | 2026-08-05 |
| city (city) | Demo City | https://maps.example.invalid/fixture-p0001 (fixture — non-resolving placeholder URL) | 2026-08-05 |
| region (region) | Demo State | https://maps.example.invalid/fixture-p0001 (fixture — non-resolving placeholder URL) | 2026-08-05 |

## Review queue — not customized, needs a human before this preview is shown

- **email**: Optional source column "public_email" is empty. Placeholder demo value "hello@crystalclearcleaning-demo.invalid" was left in place (never guessed).
- **service_areas_page_content**: The Service Areas page's neighborhood breakdown and the JSON-LD areaServed list are demo-authored illustrative content, not sourced from data/prospects.csv (the schema has no per-neighborhood field). Review and replace before sharing this preview.
- **brand_mark_logo**: Using the neutral placeholder brand mark (site/source/assets/img/brand-mark.svg). Do not replace with the prospect's real logo without a recorded rights decision (config/compliance.yml).
- **opening_hours**: The JSON-LD openingHours value ("Mo-Sa 07:00-19:00") is demo content — data/prospects.csv has no hours field. Confirm real hours before publishing.

## Compliance notes

- No third-party photos, logos, or real review text were used — see review queue above.
- This preview carries noindex/nofollow and a 30-day expiry (`preview-expires` meta tag).
- This build did not send anything anywhere — it only wrote files under this folder.
