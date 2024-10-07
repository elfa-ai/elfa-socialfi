export const getUrlBase = () => {
  const IS_SERVER = typeof window === "undefined";

  return IS_SERVER ? process.env.NEXT_PUBLIC_FE_BASE_URL : window.location.host;
};

export const replaceUrlWithoutReload = (newPathname: string) => {
  const newUrl = `${window.location.protocol}//${window.location.host}${newPathname}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
};

export const copyContent = (textToCopy: string) =>
  window.navigator.clipboard.writeText(textToCopy);
