import { Layer } from "../layer/layer";
import { IStyle } from "../style/style";

export interface IImage {}

export class Image extends Layer {
  style: IStyle;

  constructor(image: any) {
    super(image);
  }
}
