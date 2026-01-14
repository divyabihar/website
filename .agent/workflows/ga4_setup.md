---
description: How to setup Google Analytics 4 (GA4) and integrate with Next.js
---

# Google Analytics 4 (GA4) Setup Guide for Next.js

## 1. Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/).
2. Click **Admin** (gear icon, bottom left).
3. Click **Create Property**.
4. **Property Name**: `Divya Bihar Website`.
5. **Timezone**: India (GMT+5:30).
6. Click **Next**, choose Industry (Travel), and click **Create**.

## 2. Get Measurement ID
1. In the property, choose platform: **Web**.
2. **Website URL**: `divyabihar.com`.
3. **Stream Name**: `Divya Bihar Web`.
4. Click **Create Stream**.
5. Copy the **Measurement ID** (starts with `G-XXXXXXX`).

## 3. Integration in Next.js (Using @next/third-parties)
We will use the official optimized library from Next.js.

### Step A: Install Package
Run this in your terminal:
```bash
npm install @next/third-parties@latest
```

### Step B: Add to Root Layout
Open `frontend/src/app/layout.tsx` and modify it:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XYZ12345" /> {/* Replace with your ID */}
    </html>
  )
}
```

### Tip: Use Environment Variable
Instead of hardcoding, use `process.env.NEXT_PUBLIC_GA_ID`.
1. Add to `.env`: `NEXT_PUBLIC_GA_ID=G-XXXXXXX`
2. Update code: `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />`

## 4. Verification
1. Deploy the changes (`git push`).
2. Visit your live site `divyabihar.com`.
3. Go to Analytics Dashboard > **Realtime**.
4. You should see "1 user right now" (yourself).
