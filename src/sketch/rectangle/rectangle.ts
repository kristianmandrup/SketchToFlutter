import { IPoint } from "../point";

export interface IRectangle {
  offset: IPoint;
  width: number;
  height: number;
  x: number;
  y: number;
}

/**
 * The offset needs to be calculated relative to parent/container
 */
export class Rectangle {
  offset: IPoint;
  width: number;
  height: number;

  constructor(public rectangle: any) {}

  get x(): number {
    return this.offset.x;
  }

  get y(): number {
    return this.offset.y;
  }
}
