import {BaseStyler} from "./base";
import {IPosition} from "../../generic";

export interface IStop {
  position : number;
  color : string;
}

export interface IGradient {
  stops : IStop[];
}

export class Gradient extends BaseStyler {
  from : IPosition;
  to : IPosition;
  fillType : string;
  stops : IStop[];

  constructor(public element : any) {
    super(element)
  }
}
