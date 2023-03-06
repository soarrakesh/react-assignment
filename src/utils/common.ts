export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return hexToRgb(color);
};

function hexToRgb(hexVal: string) {
  let ret: any;

  // If the hex value is valid.
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)) {
    // Getting the content after '#',
    // eg. 'ffffff' in case of '#ffffff'
    ret = hexVal.slice(1);

    // Splitting each character
    ret = ret.split("");

    // Checking if the length is 3
    // then make that 6
    if (ret.length === 3) {
      var ar = [];
      ar.push(ret[0]);
      ar.push(ret[0]);
      ar.push(ret[1]);
      ar.push(ret[1]);
      ar.push(ret[2]);
      ar.push(ret[2]);
      ret = ar;
    }

    // Starts with '0x'(in hexadecimal)
    ret = "0x" + ret.join("");

    // Converting the first 2 characters
    // from hexadecimal to r value
    var r = (ret >> 16) & 255;

    // Converting the second 2 characters
    // to hexadecimal to g value
    var g = (ret >> 8) & 255;

    // Converting the last 2 characters
    // to hexadecimal to b value
    var b = ret & 255;

    // Appending all of them to make
    // the RGBA value
    return "rgba(" + [r, g, b].join(",") + ",1)";
  }
}
