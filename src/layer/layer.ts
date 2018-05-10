import { IFlow } from "../flow/flow";
import { IRectangle } from "../rectangle/rectangle";

export interface ILayer {
  id: string;
  name: string;
  parent: Layer;
  hidden: boolean;
  frame: IRectangle;
  flow: IFlow;
}

export class Layer implements ILayer {
  id: string;
  name: string;

  parent: Layer;
  hidden: boolean;

  frame: IRectangle;
  flow: IFlow;

  constructor(public layer: any) {}
}
