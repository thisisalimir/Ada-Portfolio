// Method to get image from assets
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
