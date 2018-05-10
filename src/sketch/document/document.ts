import { IPage } from "../page/page";
import { ILayer } from "../layer/layer";

export interface IDocument {
  pages: IPage[];
}

export class Document implements IDocument {
  pages: IPage[];
  layers: ILayer[];

  constructor(public document: any) {
    this.layers = document.selectedLayers;
  }
}
