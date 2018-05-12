import {Fill} from "./fill";
import {Border} from "./border";
import {BlendingModeType} from "./types";
import {Blur} from "./blur";
import {Shadow} from "./shadow";

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

  constructor(public style : IStyle) {
    this.init()
  }

  init() {
    this.opacity = this.style.opacity;
    this
      .setBlur()
      .setBlendingMode()
      .setFills()
      .setBorders()
      .setShadows();
  }

  setBlur() {
    this.blur = new Blur(this.style)
    return this
  }

  setBlendingMode() {
    this.blendingMode = new BlendingModeType().resolve(this.style.blendingMode);
    return this
  }

  // TODO
  setShadows() {
    this.shadows = this
      .style
      .shadows
      .map(shadow => {
        return new Shadow(shadow);
      });
    return this
  }

  setFills() {
    this.fills = this
      .style
      .fills
      .map(fill => {
        return new Fill(fill);
      });
    return this
  }

  setBorders() {
    this.borders = this
      .style
      .borders
      .map(border => {
        return new Border(border);
      });
    return this
  }
}
