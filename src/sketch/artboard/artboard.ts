import { autobind } from "core-decorators";
import { Button } from "../button";
import { Converter } from "../converter";

export class ArtBoard extends Converter {
  selection: any;
  labels = [];
  buttons = [];
  shapes = [];
  allElements = [];

  artboardName: string = "DefaultViewName";
  artboardBackgroundColor: any;

  constructor(context: any) {
    super();
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
    this.artboardName = `${removeSpaces(item.name)}View`;
    this.artboardBackgroundColor = item.sketchObject.backgroundColor();
    item.iterate(this.handleSketchItem);
  }

  @autobind()
  handleSketchItem(element) {
    if (element.isText) {
      this.labels.push(element);
    } else if (element.isShape) {
      this.shapes.push(element);
    } else if (element.isGroup) {
      // buttons?
      this.buttons.push(element);
    }
    this.allElements.push(element);
  }

  writeAll() {
    const { addNode, header, allElements } = this;

    // Header
    this.header(this.artboardName);

    // Declarations
    this.declarationsFor(this.allElements);

    // Init
    this.init();

    // View Hierarchy
    this.viewHierarchy(allElements);

    // Layout
    this.layout(allElements);

    // Style

    // Artboard Background Color
    this.backgroundColor();
  }

  viewHierarchy(elements) {
    elements.map(e => {
      this.addNode({
        type: "view",
        id: sanitizeName(e.name)
      });
    });

    elements.reverse().map(e => {
      this.addNode({
        type: "subview",
        id: sanitizeName(e.name)
      });
    });
  }

  backgroundColor() {
    this.addNode({
      type: "backgroundColor",
      value: this.lineColor(this.artboardBackgroundColor)
    });
  }

  header(viewName) {
    this.addNode({
      type: "import",
      id: "UIKit"
    });
    this.addNode({
      type: "class",
      id: viewName,
      extends: "StatelessWidget"
    });
  }

  doLabels(labels: any[]) {
    labels.map(label => {
      this.addNode(this.styleForText(l));
    });
  }

  doShapes(shapes) {
    shapes.map(shape => {
      const elementName = sanitizeName(shape.name);
      const color = shape.sketchObject
        .style()
        .fills()[0]
        .color();

      this.addNode({
        type: "backgroundColor",
        value: this.lineColor(color)
      });
    });
  }

  doButtons(buttons) {
    // Buttons
    buttons.map(this.doButton);
  }

  doButton(button) {
    new Button(button).do();
  }

  doContent(labels) {
    // Content
    this.contentForLabels(labels);
  }

  copyAll() {
    this.log(fullText);
    this.copyText(fullText);
  }
}
