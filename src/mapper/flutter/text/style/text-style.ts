import { IColor } from "../../color";

export interface ITextStyle {
  color: IColor;
}

export class TextStyle implements ITextStyle {
  color: IColor;
}
