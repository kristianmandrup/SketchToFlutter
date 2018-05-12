import {IRectangle} from "../rectangle";
import {IStyle} from "../style/style";
import {IFlow} from "../flow";
import {Layer, ILayer} from "./layer";

export interface ILayerGroup {
  id : string;
  name : string;
  parent : any; // ILayerGroup | undefined
  layers : ILayer[];
  rectangles : IRectangle[];
}

export class LayerGroup extends Layer implements ILayerGroup {
  type = 'group'

  style : IStyle;
  layers : ILayer[];
  rectangles : IRectangle[];

  constructor(public group : any) {
    super(group);
    this.rectangles = this
      .layers
      .map(layer => layer.sized);
  }

  serializedProps() {
    return [
      ...super.serializedProps(),
      'layers',
      'rectangles'
    ]
  }

}
