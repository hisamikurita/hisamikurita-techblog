import { BaseHead } from "@/components/BaseHead";
import { META_DESCRIPTION, SITE_NAME } from "@/constants";
import { SearchBody } from "./components/SearchBody";

export const PageSearch = () => {
  const metaData = {
    title: `検索 | ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pb-10 pt-[60px]">
        <div className="c-main-container">
          <div className="mt-12">
            <SearchBody />
          </div>
        </div>
      </div>
    </>
  );
};
