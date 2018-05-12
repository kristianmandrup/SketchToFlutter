import {IPosition} from "./position";
import {ISize} from "./size";

export interface ISized {
  offset : IPosition
  size : ISize
  width : number
  height : number
  x : number
  y : number
}

/**
 * The offset needs to be calculated relative to parent/container
 */
export class Sized implements ISized {
  offset : IPosition = {
    x: 0,
    y: 0
  };
  size : ISize = {
    width: 0,
    height: 0
  };

  constructor(public shape : any) {
    this.setOffset()
    this.setSize()
  }

  setOffset() {
    this.offset.x = this.shape.x
    this.offset.y = this.shape.y
  }

  setSize() {
    this.size.width = this.shape.x
    this.size.height = this.shape.y
  }

  get x() : number {return this.offset.x;}

  get y() : number {return this.offset.y;}

  get width() : number {return this.size.width;}

  get height() : number {return this.size.height;}
}
