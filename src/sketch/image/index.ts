import {Layer} from "../layer/layer";
import {IStyle, Style} from "../style/style";

export interface IImage {}

export class Image extends Layer {
  style : IStyle;

  constructor(image : any) {
    super(image);
    this.style = new Style(image.style)
  }
}
