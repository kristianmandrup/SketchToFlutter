import {Color, IColor} from "../color";
import {IGradient} from "./gradient";
import {BaseStyler} from "./base";

export class Fill extends BaseStyler {
  color : string // IColor;

  constructor(public element : any) {
    super(element)
    this
      .setFillType()
      .setGradient();
  }
}
