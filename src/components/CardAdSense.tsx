import { cn } from "@/libs/tailwindMerge";
import { useLayoutEffect } from "react";

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
  useLayoutEffect(() => {
    (window.adsbygoogle = window.adsbygoogle ?? []).push({});
  }, []);

  return <ins className={cn("adsbygoogle", className)} data-ad-client={googleAdsensePublisherId} data-ad-slot={adSlot} data-ad-format={adFormat} data-ad-layout={adLayout} data-full-width-responsive={`${fullWidthResponsive}`} />;
};
