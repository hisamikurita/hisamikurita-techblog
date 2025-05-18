import { formatDate, formatYmd } from "@/utils/date";

type Props = {
  date?: string;
};

export const DateFormatter = ({ date }: Props) => {
  if (!date) return "日付がありません";

  const formattedDate = formatDate(date);
  const ymdDate = formatYmd(date);

  return (
    <time dateTime={ymdDate} className="text-std-17N-7 text-body shrink-0">
      {formattedDate} 🗓️
    </time>
  );
};
