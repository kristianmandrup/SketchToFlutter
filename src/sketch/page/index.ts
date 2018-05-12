import {ILayer} from "../layer/layer";
import {IRectangle} from "../rectangle/";
import {IDocument} from "../document/";

export interface IPage {}

export class Page {
  id : string;
  name : string;
  layers : ILayer[];
  frame : IRectangle;
  parent : IDocument;

  constructor(page : any) {
    this.id = page.id;
    this.name = page.name;
  }
}
