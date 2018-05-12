import {Layer} from "../layer/";
import {IStyle, Style} from "../style/";

export interface IShape {
  style : any
}

export class Shape extends Layer {
  type = 'shape'
  style : IStyle

  constructor(public shape : IShape) {
    super(shape);
    this.style = new Style(shape.style)
  }
}
