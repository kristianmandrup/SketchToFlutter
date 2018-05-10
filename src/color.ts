import { Converter } from "./converter";

const colorMap = {
  "1111": "white",
  "0001": "black",
  "1001": "red",
  "0101": "green",
  "0011": "blue",
  "0111": "cyan",
  "1011": "magenta",
  "10.501": "orange",
  "0.500.51": "purple",
  "0.60.40.21": "brown",
  "1101": "yellow",
  "0.50.50.51": "gray",
  "0.670.670.671": "lightGray",
  "0.330.330.331": "darkGray",
  "0000": "clear"
};

export interface IColor {
  value: string;
}

export interface IRgb {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export class Color extends Converter {
  name: string;
  rgb: IRgb;

  constructor(public color?: any) {
    super();
  }

  get colorMap() {
    return colorMap;
  }

  convert(color?: any) {
    color = color || this.color;

    var red = Math.round(color.red() * 100) / 100;
    var green = Math.round(color.green() * 100) / 100;
    var blue = Math.round(color.blue() * 100) / 100;
    var alpha = Math.round(color.alpha() * 100) / 100;
    let colorKey = `${red}${green}${blue}${alpha}`;
    var color = colorMap[colorKey];

    color = color || {
      rgb: {
        red,
        green,
        blue,
        alpha
      }
    };

    this.addNode({
      type: "color",
      value: color
    });
  }
}
