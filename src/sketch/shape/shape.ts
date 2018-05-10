import { Layer } from "../layer/layer";

export interface IShape {}

export class Shape extends Layer {
  constructor(public shape: IShape) {
    super(shape);
  }
}
