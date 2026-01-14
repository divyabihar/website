"use client";

import { useEffect, useRef } from "react";

type AdSlotProps = {
    slotId: string;
    description?: string; // e.g. "Sidebar Top"
    format?: 'auto' | 'fluid' | 'rectangle' | 'vertical';
    className?: string;
    style?: React.CSSProperties;
};

const AdSlot = ({ slotId, description, format = 'auto', className, style }: AdSlotProps) => {
    const isAdsEnabled = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true';
    const isDev = process.env.NODE_ENV === 'development';
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isAdsEnabled || isDev) return;

        try {
            // Push ad ONLY if window.adsbygoogle is defined (script loaded)
            if (typeof window !== "undefined") {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error("AdSense Error in slot " + slotId, err);
        }
    }, [isAdsEnabled, isDev, slotId]);

    // 1. If Ads disabled or Dev mode -> Show Placeholder (or nothing)
    if (!isAdsEnabled || isDev) {
        return (
            <div
                className={`flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-400 text-xs uppercase tracking-wider rounded-lg p-4 ${className}`}
                style={{ minHeight: '280px', ...style }} // Reserve height to prevent CLS
            >
                <div className="text-center">
                    <span className="block font-bold mb-1">Advertisement</span>
                    <span className="text-[10px]">{description || 'Ad Space Reserved'}</span>
                </div>
            </div>
        );
    }

    // 2. Production Ad Code
    return (
        <div className={`overflow-hidden my-6 ${className}`} ref={adRef}>
            <div className="text-[10px] text-gray-300 uppercase tracking-wider text-center mb-1">Advertisement</div>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', textAlign: 'center', ...style }}
                data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default AdSlot;
