import { Converter } from "../converter";
import { Label } from "./label";

export class Labels extends Converter {
  constructor(public labels) {
    super();
  }

  convert(labels) {
    labels = labels || this.labels;
    var contentStr = labels.map(this.doLabel);
  }

  doLabel(label) {
    return new Label(label).convert();
  }
}
