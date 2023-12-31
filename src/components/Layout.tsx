import { BaseHeader } from "./BaseHeader";
import { BaseFooter } from "./BaseFooter";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BaseHeader />
      <main>{children}</main>
      <BaseFooter />
    </>
  );
};
