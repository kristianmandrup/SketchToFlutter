import { Converter } from "../converter";

export class ButtonShape extends Converter {
  constructor(public item) {
    super();
  }

  convert() {
    return this.node({
      type: "backgroundColor",
      value: this.lineColor(this.color)
    });
  }

  get color(): any {
    return this.item.sketchObject
      .style()
      .fills()[0]
      .color();
  }
}
