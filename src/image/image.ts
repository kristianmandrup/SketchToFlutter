import { Layer } from "../layer/layer";

export interface IImage {}

export class Image extends Layer {
  constructor(image: any) {
    super(image);
  }
}
