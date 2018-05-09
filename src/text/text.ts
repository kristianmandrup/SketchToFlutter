import { Converter } from "../converter";

export class Text extends Converter {
  constructor(public text) {
    super();
  }

  get isUpperCase() {
    return this.text == this.text.toUpperCase();
  }

  formattedTextForText(t) {
    this.addNode({
      type: "text",
      value: this.isUpperCase ? this.capitalizedCase(t) : t
    });
  }

  capitalizedCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
