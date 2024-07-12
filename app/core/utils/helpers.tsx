// Add alpha to hex color
export const hexWithOpacity = (hexColor: string, opacity: number) => {
  var _opacity = Math.round(Math.min(Math.max(opacity, 0), 1) * 255);
  return hexColor + _opacity.toString(16).toUpperCase();
};
