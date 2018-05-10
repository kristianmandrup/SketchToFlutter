import { Color, IColor } from "../color";
import { IGradient } from "./gradient";

export class Fill {
  color: IColor;
  gradient: IGradient;
  fillType: string;

  constructor(fill) {}
}
