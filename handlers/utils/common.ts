export const isDefined = (val: null | undefined | unknown) => {
  return typeof val !== "undefined" && val !== null;
};
