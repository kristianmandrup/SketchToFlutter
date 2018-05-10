import { IRectangle } from "../rectangle/rectangle";
import { IStyle } from "../style/style";
import { IFlow } from "../flow/flow";
import { Layer, ILayer } from "./layer";

export interface ILayerGroup {
  id: string;
  name: string;
  parent: any; // ILayerGroup | undefined
}

export class LayerGroup extends Layer implements ILayerGroup {
  id: string;
  name: string;
  parent: any;
  frame: IRectangle;
  style: IStyle;
  flow: IFlow;
  layers: ILayer[];

  constructor(public group: any) {
    super(group);
  }
}
