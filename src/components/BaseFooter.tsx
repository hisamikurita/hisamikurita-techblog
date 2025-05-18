import { SITE_NAME } from "@/constants";

export const BaseFooter = () => {
  return (
    <footer>
      <small className="block py-[28px] text-center text-[14px]">© {SITE_NAME}</small>
    </footer>
  );
};
