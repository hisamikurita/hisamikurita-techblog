import { BaseHeader } from "./BaseHeader";

export const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-notosansjp">
      <BaseHeader />
      <main>{children}</main>
    </div>
  );
};
