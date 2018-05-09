import { ArtBoard } from "./artboard";
import { Converter } from "./converter";

export class Canvas extends Converter {
  isArtboardSelected: boolean;

  constructor(public context) {
    super();
  }

  parse() {
    const { isArtboardSelected, context } = this;
    isArtboardSelected ? this.doArtboard(context) : this.single(context)
  }

  doArtboard(context) {
    new ArtBoard(context).convert();
  }

  single(context) {
    var lines = [];
    var selection = context.api().selectedDocument.selectedLayers;
    selection.iterate(this.doSelection);

    // Print + copy
    var fullText = "";
    lines.forEach(function(line) {
      fullText += line + "\n";
    });
    this.log(fullText);
  }

  doSelection(item) {
    if (!item.isText) return
      this.declarationsForSingleText(item);
      this.addNode({
        type: 'text',
        id: this.sanitizeName(item.name),
        value: this.formattedTextForText(item.text),
        style: this.styleForText(item)
      })
    }
  }
}
