import LottieReact from "lottie-react";
import { ButtonShare } from "@/features/blog/components/ButtonShare";
import HeartFace from "../../../../public/lottie/heart-face.json";
import { cn } from "@/libs/tailwindMerge";

export const ContentsShare = ({ currentUrl, title, className }: { currentUrl: string; title: string; className?: string }) => {
  return (
    <div className={cn("mx-auto w-full rounded-xl bg-gray-100 px-6 py-5 md:w-[640px]", className)}>
      <div className="flex items-center justify-center gap-2">
        この記事をシェアする
        <LottieReact animationData={HeartFace} loop={true} autoplay={true} aria-hidden className="relative top-[0.8px] w-6" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <ButtonShare variant="x" url={currentUrl} title={title} />
        <ButtonShare variant="fb" url={currentUrl} title={title} />
        <ButtonShare variant="hatena" url={currentUrl} title={title} />
      </div>
    </div>
  );
};
