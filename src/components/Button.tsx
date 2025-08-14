import { cn } from "@/libs/tailwindMerge";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const Button = ({ href, text, className }: { href: string; text: string; className?: string }) => {
  return (
    <a href={href} className={cn("inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-white", className)}>
      {text}
      <ArrowRightIcon width={20} height={20} className="relative top-[1px] h-5 w-5" />
    </a>
  );
};
