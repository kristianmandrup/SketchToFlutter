import {FillType, GradientType} from "./types";

export class BaseStyler {
  gradient : string
  fillType : string;

  constructor(public element : any) {}

  setGradient() {
    this.gradient = this
      .createGradientType()
      .resolve(this.element.gradient);
    return this
  }

  setFillType() {
    this.fillType = this
      .createFillType()
      .resolve(this.element.fillType);
    return this
  }

  createFillType() : FillType {return new FillType()}
  createGradientType() : GradientType {return new GradientType()}
}
