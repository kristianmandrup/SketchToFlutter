import {IGradient} from "./gradient";
import {BaseStyler} from "./base";
import {IPosition} from "../../generic";
import {BlurType} from "./types";

export class Blur extends BaseStyler {
  blurType : string
  radius : number
  center : IPosition
  enabled : boolean

  constructor(public element : any) {
    super(element)
    this.radius = element.radius
    this.enabled = element.enabled
    this.center = element.center
    this.setBlurType();
  }

  setBlurType() {
    this.blurType = new BlurType().resolve(this.element.blendingMode);
    return this
  }
}
