import { autobind } from "core-decorators";
import { Converter } from "./converter";

export class Declarations extends Converter {
  declarationsFor(elements) {
    var s = "";
    elements.map(this.declarationsForSingleText);
    return s;
  }

  @autobind()
  declarationsForSingleText(e: any) {
    return this.single(e);
  }

  single(e: any) {
    const { text, shaped, grouped } = this;
    text(e) || shaped(e) || grouped(e);
  }

  text(e: any) {
    if (!e.isText) return;
    this.forText(e);
  }

  shaped(e: any) {
    if (!e.isShape) return;
    // s += `    let ${sanitizeName(e.name)} = UIView()\n`;
  }

  grouped(e: any) {
    if (!e.isGroup) return;
    // Only if contains button
    // s += `    let ${sanitizeName(e.name)} = UIButton()\n`;
  }

  forText(e) {
    this.addNode({
      type: "text",
      id: sanitizeName(e.name)
    });
  }
}
