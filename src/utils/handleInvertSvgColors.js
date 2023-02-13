export function isStringInArray (string, array){
  return array.some((el) => el === string);
}

function colorToRgb(color) {
    // Check if the color is in hexadecimal format
    if (color.startsWith('#')) {
      // If the color is in hexadecimal format, convert it to RGB
      let r = parseInt(color.substr(1, 2), 16);
      let g = parseInt(color.substr(3, 2), 16);
      let b = parseInt(color.substr(5, 2), 16);
      return [r, g, b];
    } 
}

function isColorTooBright(color) {
    // Convert the color to RGB
    let rgb = colorToRgb(color);
  
    // Calculate the perceived brightness of the color
    let brightness = rgb ? ((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000) : null;
  
    // Return true if the brightness is too high, 100 is an arbritrary value
    return brightness ? brightness >= 100 : true; 
  }


export function handleInvertSvgColors(svg, setShouldInvert) {
    // Get all the paths in the SVG
    let paths = svg.querySelectorAll('path');
  
    // Iterate over all the paths
    for (let path of paths) {
      // Get the fill color of the path
      let color = path.getAttribute('fill');
  
      // Check if the color is too bright for the white background
      if (isColorTooBright(color)) {
        // If any color is too bright, set shouldInvert to true 
        setShouldInvert(true);
        return;
      }
    }
  }