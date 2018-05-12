import {autobind} from "core-decorators";
import {ArtboardItem} from "./item";
import {Serializer} from "../../serializer";
import {BaseSketchElement} from "../base";

export class ArtBoard extends BaseSketchElement {
  type = 'artboard'

  selection : any;
  groups = [];
  labels = [];
  shapes = [];
  allElements = [];

  backgroundColor : any;

  artboardItem : any
  extractArtboardItem : Function

  constructor(public context : any) {
    super()
    this.selection = context
      .api()
      .selectedDocument
      .selectedLayers;
    this.artboardItem = new ArtboardItem(this)
    this.extractArtboardItem = this
      .artboardItem
      .extract
      .bind(this.artboardItem)
  }

  serializedProps() {
    return [
      ...super.serializedProps(),
      'backgroundColor',
      'shapes',
      'artboardItem'
    ]
  }

  convert() {
    this
      .selection
      .iterate(this.extractSelected);
    this.setAllReversed('allElements', 'shapes')
  }

  setAllReversed(...names : string[]) : void {
    names.map(name => this.setReversed(name))
  }

  setReversed(name : string) {
    this[name] = this[name].reverse()
  }

  reverse(elements : any[]) {
    return elements.reverse()
  }

  @autobind
  extractSelected(item) {
    if (!item.isArtboard) 
      return;
    this.backgroundColor = item
      .sketchObject
      .backgroundColor();
    item.iterate(this.extractArtboardItem);
  }

}
