import { autobind } from "core-decorators";

export class ArtBoard {
  selection: any;
  labels = [];
  buttons = [];
  shapes = [];
  allElements = [];
  artboardBackgroundColor: any;

  constructor(public context: any) {
    this.selection = context.api().selectedDocument.selectedLayers;
  }

  convert() {
    this.selection.iterate(this.handleSelected);
    this.allElements = this.allElements.reverse();
    this.labels = this.labels.reverse();
    this.shapes = this.shapes.reverse();
    this.buttons = this.buttons.reverse();
  }

  @autobind
  handleSelected(item) {
    if (!item.isArtboard) return;
    this.artboardBackgroundColor = item.sketchObject.backgroundColor();
    item.iterate(this.handleSketchItem);
  }

  @autobind()
  handleSketchItem(element) {
    const { label, shape, group, allElements } = this;
    label(element) || shape(element) || group(element);
    allElements.push(element);
  }

  label(element) {
    if (!element.isText) return;
    this.labels.push(element);
  }

  shape(element) {
    if (!element.isShape) return;
    this.shapes.push(element);
  }

  group(element) {
    if (!element.isGroup) return;
    // buttons?
    this.buttons.push(element);
  }
}
