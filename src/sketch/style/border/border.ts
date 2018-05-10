import { Color } from "../color";
import { IGradient } from "../gradient";
import { IColor } from "../../color";

export class Border {
  color: IColor;
  gradient: IGradient;
  fillType: string;
  position: IPosition;
  thickness: IThickness;

  constructor(public border: any) {}
}
