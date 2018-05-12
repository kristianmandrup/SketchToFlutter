import {Sized, ISized} from "../sized";

export interface IRectangle extends ISized {}

/**
 * The offset needs to be calculated relative to parent/container
 */
export class Rectangle extends Sized {
  constructor(rectangle : any) {
    super(rectangle)
  }
}
