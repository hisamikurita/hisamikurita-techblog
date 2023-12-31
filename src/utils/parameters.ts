export const getDraftKey = (requestUrl: string) => {
  const url = new URL(requestUrl);
  const params = new URLSearchParams(url.search);
  const draftKey = params.get("draftKey") || undefined;
  return draftKey;
};

export const getContentId = (requestUrl: string) => {
  const url = new URL(requestUrl);
  const params = new URLSearchParams(url.search);
  const contentId = params.get("contentId") || undefined;
  return contentId;
};
