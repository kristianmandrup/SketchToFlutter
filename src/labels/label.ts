import { Converter } from "../converter";

export class Label extends Converter {
  constructor(public label) {
    super();
  }

  convert(label?: any) {
    this.addNode({
      type: "label",
      id: sanitizeName(label.name).text,
      value: this.formattedTextForText(label.text)
    });
  }
}
