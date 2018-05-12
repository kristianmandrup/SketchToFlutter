import {Fill} from "./fill";
import {Border} from "./border";

export interface IStyle {
  opacity : number;
  blendingMode : any
  blur : any
  fills : any
  borders : any // incl borderOptions
  shadows : any // incl innerShadows
}

// https://developer.sketchapp.com/reference/api/#style
export class Style {
  opacity : number;
  blendingMode : any
  blur : any
  fills : any
  borders : any // incl borderOptions
  shadows : any // incl innerShadows

  constructor(style : IStyle) {
    this.borders = style.borders;
    this.opacity = style.opacity;
    this.blur = style.blur;

  }

  init() {
    this
      .setFills()
      .setBorders();
  }

  setFills() {
    this
      .fills
      .map(fill => {
        return new Fill(fill);
      });
    return this
  }

  setBorders() {
    this
      .borders
      .map(border => {
        return new Border(border);
      });
    return this
  }
}
