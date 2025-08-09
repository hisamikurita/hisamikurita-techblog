import { cn } from "@/libs/tailwindMerge";
import { formatDate, formatYmd } from "@/utils/date";

type Props = {
  date?: string;
  className?: string;
};

export const DateFormatter = ({ date, className }: Props) => {
  if (!date) return "日付がありません";

  const formattedDate = formatDate(date);
  const ymdDate = formatYmd(date);

  return (
    <time dateTime={ymdDate} className={cn("text-xs text-gray-400", className)}>
      {formattedDate}
    </time>
  );
};
