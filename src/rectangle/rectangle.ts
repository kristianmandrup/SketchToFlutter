import { IPoint } from "../point";

export interface IRectangle {}

/**
 * The offset needs to be calculated relative to parent/container
 */
export class Rectangle {
  offset: IPoint;
  width: number;
  height: number;

  constructor(public rectangle: any) {}
}
