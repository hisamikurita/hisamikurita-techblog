export const GA_MEASUREMENT_ID = "G-7V46GHH1LT";

export const pageView = (url: string) => {
  // @ts-ignore
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
