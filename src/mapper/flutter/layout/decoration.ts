import { IBorder } from "./border/border";
import { Color } from "../color";

export class Decoration {}

export class BoxDecoration extends Decoration {
  border: IBorder;
  color: Color;
}
