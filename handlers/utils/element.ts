export const isElementTopVisible = (
  element: HTMLElement,
  extraPadding: number = 0,
) => {
  const rect = element.getBoundingClientRect();
  return rect.top >= extraPadding;
};
