import {Sized, ISized} from "../../generic/sized";

export interface IRectangle extends ISized {}

/**
 * The offset needs to be calculated relative to parent/container
 */
export class Rectangle extends Sized {
  type = 'rectangle'

  constructor(rectangle : any) {
    super(rectangle)
  }
}
