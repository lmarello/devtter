export const addOpacityToColor = (color, opacity) => {
  const opacityHexa = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHexa}`;
};
