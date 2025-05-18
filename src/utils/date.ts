import { format } from "date-fns";
import { ja } from "date-fns/locale";

export const formatDate = (date: string) => {
  return format(new Date(date), "yyyy年MM月dd日", { locale: ja });
};

export const formatYmd = (date: string) => {
  return format(new Date(date), "yyyy-MM-dd");
};
