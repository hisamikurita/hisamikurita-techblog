import { format } from "date-fns";
import { ja } from "date-fns/locale";

type Props = {
  date?: string;
};

export const DateFormatter = ({ date }: Props) => {
  if (!date) return "日付がありません";

  const formattedDate = format(new Date(date), "yyyy年MM月dd日", { locale: ja });
  const ymdDate = format(new Date(date), "yyyy-MM-dd");

  return (
    <time dateTime={ymdDate} className="text-std-17N-7 text-body shrink-0">
      {formattedDate} 🗓️
    </time>
  );
};
