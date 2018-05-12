import {autobind} from "core-decorators";

export class ArtboardItem {
  labels = [];
  buttons = [];
  shapes = [];
  allElements = [];

  constructor(public artboard : any) {
    this.allElements = artboard
    this.labels = artboard.label;
    this.buttons = artboard.buttons
    this.shapes = artboard.shapes
  }

  @autobind()
  extract(element : any) {
    const {label, shape, group, allElements} = this;
    label(element) || shape(element) || group(element);
    allElements.push(element);
  }

  @autobind()
  label(element) {
    if (!element.isText) 
      return;
    this
      .labels
      .push(element);
  }

  @autobind()
  shape(element) {
    if (!element.isShape) 
      return;
    this
      .shapes
      .push(element);
  }

  @autobind()
  group(element) {
    if (!element.isGroup) 
      return;
    
    // buttons?
    this
      .buttons
      .push(element);
  }
}
