export const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.length === 4 ? hex[1].repeat(2) : hex.slice(1, 3), 16);
  const g = parseInt(hex.length === 4 ? hex[2].repeat(2) : hex.slice(3, 5), 16);
  const b = parseInt(hex.length === 4 ? hex[3].repeat(2) : hex.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};
