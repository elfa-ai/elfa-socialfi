export const parseKeywordFromSlug = (slug: string) => slug.split("-").join(" ");

export const constructSlugFromKeyword = (keyword: string) =>
  keyword.split(" ").join("-");
