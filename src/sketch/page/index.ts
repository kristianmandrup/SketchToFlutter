import {LayerGroup, ILayerGroup} from "../layer";

export interface IPage extends ILayerGroup {}

export class Page extends LayerGroup implements IPage {
  type = 'page'

  constructor(page : any) {
    super(page)
  }

  serializedProps() {
    return [...super.serializedProps()]
  }
}
