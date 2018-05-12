import {autobind} from "core-decorators";
import {ArtboardItem} from "./item";

export class ArtBoard {
  selection : any;
  labels = [];
  buttons = [];
  shapes = [];
  allElements = [];
  artboardBackgroundColor : any;
  artboardItem : any
  extractArtboardItem : Function

  constructor(public context : any) {
    this.selection = context
      .api()
      .selectedDocument
      .selectedLayers;
    this.artboardItem = new ArtboardItem(this)
    this.extractArtboardItem = this
      .artboardItem
      .bind(this.artboardItem)
  }

  convert() {
    this
      .selection
      .iterate(this.extractSelected);
    this.allElements = this
      .allElements
      .reverse();
    this.labels = this
      .labels
      .reverse();
    this.shapes = this
      .shapes
      .reverse();
    this.buttons = this
      .buttons
      .reverse();
  }

  @autobind
  extractSelected(item) {
    if (!item.isArtboard) 
      return;
    this.artboardBackgroundColor = item
      .sketchObject
      .backgroundColor();
    item.iterate(this.extractArtboardItem);
  }

}
