import { IAlignment } from "../layout/alignment";

export interface IImage {
  alignment: IAlignment;
}

export class Image implements IImage {
  alignment: IAlignment;
}
