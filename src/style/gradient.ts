import { Color } from "../color";
import { IPoint } from "../point";

export interface IStop {
  position: number;
  color: string;
}

export interface IGradient {
  stops: IStop[];
}

export class Gradient {
  from: IPoint;
  to: IPoint;
  fillType: string;
  stops: IStop[];

  constructor(public gradient: any) {}
}
