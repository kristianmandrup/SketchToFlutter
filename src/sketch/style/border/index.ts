import {IGradient} from "../gradient";
import {FillType, GradientType} from "../types";
import {BorderPositionType} from "../types/border-position";
import {BaseStyler} from "../base";

export class Border extends BaseStyler {
  color : string // IColor;
  position : string;
  thickness : number;

  constructor(public element : any) {
    super(element);
    this.thickness = element.thickness;
    this.color = element.color;
  }

  setPosition() {
    this.position = this
      .createBorderPositionType()
      .resolve(this.element.position);
    return this
  }

  createBorderPositionType() : BorderPositionType {return new BorderPositionType()}
}
