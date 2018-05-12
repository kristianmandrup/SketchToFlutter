import { IAlignment } from "../layout/alignment";
import { ITextStyle } from "./style/text-style";

export interface IText {
  alignment: IAlignment;
}

export class Text implements IText {
  alignment: IAlignment;
  style: ITextStyle;
}
