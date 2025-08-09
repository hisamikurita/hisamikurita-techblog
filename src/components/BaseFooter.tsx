import { SITE_NAME } from "@/constants";

export const BaseFooter = () => {
  return (
    <footer>
      <small className="block py-7 text-center font-roboto text-[14px] font-semibold tracking-wide">© {SITE_NAME}</small>
    </footer>
  );
};
