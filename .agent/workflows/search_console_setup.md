---
description: How to setup Google Search Console and verify domain via Vercel
---

# Google Search Console Setup Guide for Vercel

## 1. Add Property
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** (top left dropdown).
3. Select **Domain** (not URL prefix).
4. Enter `divyabihar.com`.
5. Click **Continue**.

## 2. Verify Ownership (DNS Method)
Google will provide a `TXT` record (e.g., `google-site-verification=...`).

### Option A: Automatic (Vercel Integration)
1. Copy the TXT string.
2. Go to **Vercel Dashboard** > Website Project > Settings > Domains.
3. Click "Edit" on `divyabihar.com`.
4. Add a **TXT Record**.
   - **Name**: `@`
   - **Value**: Paste the google string.
   - **TTL**: Common default or 3600.
5. Click **Add**.

### Option B: Registrar (GoDaddy/Hostinger)
If Vercel isn't managing your nameservers:
1. Log in to your Domain Registrar.
2. Go to DNS Management.
3. Add a **TXT Record** with:
   - Host: `@`
   - Value: The string from Google.
4. Save.

## 3. Verify in Google
1. Wait 5-10 minutes for DNS propagation.
2. Go back to Search Console and click **Verify**.
3. You should see "Ownership verified".

## 4. Submit Sitemap
1. In Search Console sidebar, click **Sitemaps**.
2. Enter `sitemap.xml` (e.g., `https://divyabihar.com/sitemap.xml`).
3. Click **Submit**.
4. Status should eventually change to "Success" and show "Discovered Pages".

## 5. Inspection
1. Use the search bar at the top to inspect `https://divyabihar.com/`.
2. Click **Request Indexing** to prioritize the home page.
