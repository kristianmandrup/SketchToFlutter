import {LayerGroup, ILayerGroup} from "../layer";

export interface IPage extends ILayerGroup {}

export class Page extends LayerGroup implements IPage {
  constructor(page : any) {
    super(page)
  }
}
