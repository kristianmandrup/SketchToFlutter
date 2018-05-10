import { autobind } from "core-decorators";
import { Button } from "./button";
import { BaseMapper } from "../base";

export class SwiftArtBoardMapper extends BaseMapper {
  constructor(public artboard: any) {
    super(artboard);
  }

  artboardName() {
    return this.artboard.name;
  }

  writeAll() {
    const { addNode, header, artboard } = this;
    const { allElements } = artboard;

    // Header
    this.header(this.artboardName);

    // Declarations
    this.declarationsFor(allElements);

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
      const elementName = this.sanitizeName(shape.name);
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
}
