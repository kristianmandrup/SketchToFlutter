import {IPage} from "../page/";
import {ILayer} from "../layer/layer";
import {BaseSketchElement} from "../base";

export interface IDocument {
  pages : IPage[];
}

export class Document extends BaseSketchElement implements IDocument {
  type = 'document'

  pages : IPage[];
  layers : ILayer[];

  constructor(public document : any) {
    super()
    this.layers = document.selectedLayers;
  }

  serializedProps() {
    return ['pages', 'layers']
  }
}
