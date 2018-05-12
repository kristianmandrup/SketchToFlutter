import {IGradient} from "./gradient";
import {BaseStyler} from "./base";

export class Fill extends BaseStyler {
  color : string

  constructor(public element : any) {
    super(element)
    this
      .setFillType()
      .setGradient();
  }
}
