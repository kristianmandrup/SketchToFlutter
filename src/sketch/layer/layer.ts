import { IFlow } from "../flow/flow";
import { IRectangle } from "../rectangle/rectangle";

export interface ILayer {
  id: string;
  name: string;
  parent: Layer;
  hidden: boolean;
  frame: IRectangle;
  flow: IFlow;
  rectParent: IRectangle;
}

export class Layer implements ILayer {
  id: string;
  name: string;

  parent: Layer;
  hidden: boolean;

  frame: IRectangle;
  flow: IFlow;
  rectParent: IRectangle;

  constructor(public layer: any) {
    this.rectParent = layer.localRectToParentRect;
  }
}
