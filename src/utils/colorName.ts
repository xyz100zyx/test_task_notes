export const getColorName = (colorType: string, styles: string): string => {
  let base = " bg-";
  switch (colorType) {
    case "gray":
      base += "gray";
      break;
    case "pink":
      base += "pink";
      break;
    case "yellow":
      base += "yellow";
      break;
    case "blue":
      base += "blue";
      break;
    case "black":
      base += "black";
      break;
    default:
        base+="purple";
        break;
  }
  return styles + base;
};
