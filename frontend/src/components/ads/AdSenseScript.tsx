"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const AdSenseScript = () => {
    const pathname = usePathname();
    const isAdsEnabled = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true';
    const clientID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

    // Logic: Show ONLY on /blog and /hi/blog routes (and sub-routes)
    const isBlogPage = pathname?.startsWith('/blog') || pathname?.startsWith('/hi/blog');

    if (!isAdsEnabled || !clientID || !isBlogPage) {
        return null;
    }

    return (
        <Script
            id="adsbygoogle-init"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientID}`}
            crossOrigin="anonymous"
            strategy="lazyOnload" // Load efficiently after main content
        />
    );
};

export default AdSenseScript;
