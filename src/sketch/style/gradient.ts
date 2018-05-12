import {Color} from "../color";
import {IPoint} from "../point";
import {BaseStyler} from "./base";

export interface IStop {
  position : number;
  color : string;
}

export interface IGradient {
  stops : IStop[];
}

export class Gradient extends BaseStyler {
  from : IPoint;
  to : IPoint;
  fillType : string;
  stops : IStop[];

  constructor(public element : any) {
    super(element)
  }
}
