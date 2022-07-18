// convert rgb to hex

const ConvertRGBtoHex = (r, g, b) => {
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);

  if (red.length === 1) red = '0' + red;
  if (green.length === 1) green = '0' + green;
  if (blue.length === 1) blue = '0' + blue;

  return '#' + red + green + blue;
};
