import { cn } from "@/libs/tailwindMerge";
import { useEffect } from "react";
import { ReactSVG } from "react-svg";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

type Props = {
  className?: string;
  googleAdsensePublisherId: string;
  adSlot: string;
  adLayout?: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
};

export const CardAdSense = ({ className, googleAdsensePublisherId, adSlot, adFormat, adLayout, fullWidthResponsive }: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window.adsbygoogle = window.adsbygoogle ?? []).push({});
    }
  }, []);

  return (
    <div className={cn("relative bg-gray-100", className)}>
      <ReactSVG src="/icons/loading.svg" className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" />
      <ins className={cn("adsbygoogle relative z-10", className)} data-ad-client={googleAdsensePublisherId} data-ad-slot={adSlot} data-ad-format={adFormat} data-ad-layout={adLayout} data-full-width-responsive={`${fullWidthResponsive}`} />
    </div>
  );
};
