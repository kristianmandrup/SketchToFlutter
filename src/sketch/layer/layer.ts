import {IFlow} from "../flow"
import {IRectangle} from "../rectangle/";
import {ISized, ISize, IPosition, Sized} from "../../generic";

export interface ILayer {
  id : string;
  name : string;
  parent : Layer;
  hidden : boolean;
  frame : IRectangle;
  flow : IFlow;
  position : IPosition;
  sized : ISized
  size : ISize
}

export class Layer implements ILayer {
  type = 'layer'

  id : string;
  name : string;

  parent : Layer;
  hidden : boolean;

  frame : IRectangle;
  flow : IFlow;
  position : IPosition;
  sized : ISized
  size : ISize

  constructor(public layer : any) {
    this.sized = new Sized(layer.localRectToParentRect);
    this.position = this.sized.offset
    this.size = this.sized.size
  }

  serializedProps() {
    return [
      'id',
      'name',
      'parent',
      'hidden',
      'frame',
      'flow',
      'position',
      'size'
    ]
  }

}
