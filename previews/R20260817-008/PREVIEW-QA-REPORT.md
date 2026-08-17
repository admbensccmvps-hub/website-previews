# Preview QA Report — R20260817-008

Generated: 2026-08-17 | Expires: 2026-09-16 | Source: `data/prospects.csv`

## Claims substituted from source data

| Field | Value used | Source | Observed |
|---|---|---|---|
| business_name (business_name) | Kawartha barbershop | https://maps.google.com/?cid=16104183139311493185&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA | 2026-08-17 |
| phone_tel (phone) | +17057721677 | https://maps.google.com/?cid=16104183139311493185&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA | 2026-08-17 |
| phone_display (phone) | (705) 772-1677 | https://maps.google.com/?cid=16104183139311493185&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA | 2026-08-17 |
| address_street (address) | 245 George St N | https://maps.google.com/?cid=16104183139311493185&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA | 2026-08-17 |
| city (city) | Peterborough | https://maps.google.com/?cid=16104183139311493185&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA | 2026-08-17 |
| region (region) | ON | https://maps.google.com/?cid=16104183139311493185&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA | 2026-08-17 |

## Review queue — not customized, needs a human before this preview is shown

- **email**: Optional source column "public_email" is empty. Placeholder demo value "hello@crystalclearcleaning-demo.invalid" was left in place (never guessed).
- **service_areas_page_content**: The Service Areas page's neighborhood breakdown and the JSON-LD areaServed list are demo-authored illustrative content, not sourced from data/prospects.csv (the schema has no per-neighborhood field). Review and replace before sharing this preview.
- **brand_mark_logo**: Using the neutral placeholder brand mark (site/source/assets/img/brand-mark.svg). Do not replace with the prospect's real logo without a recorded rights decision (config/compliance.yml).
- **opening_hours**: The JSON-LD openingHours value ("Mo-Sa 07:00-19:00") is demo content — data/prospects.csv has no hours field. Confirm real hours before publishing.

## Compliance notes

- No third-party photos, logos, or real review text were used — see review queue above.
- This preview carries noindex/nofollow and a 30-day expiry (`preview-expires` meta tag).
- This build did not send anything anywhere — it only wrote files under this folder.
