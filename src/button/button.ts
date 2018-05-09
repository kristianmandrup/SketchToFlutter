import { autobind } from "core-decorators";

const fontMap = {
  "SFUIText-Semibold": {
    type: "UIFontWeightSemibold"
  }
};

export class Button {
  elementName: string;

  constructor(public button) {}

  @autobind()
  do(button?: any) {
    button = button || this.button;
    this.elementName = sanitizeName(button.name);
    button.iterate(this.handleButtonItem);
  }

  get fontMap() {
    return fontMap;
  }

  handleButtonItem(item) {
    if (!item.isText) return;

    // Button font
    var fontName = item.sketchObject.fontPostscriptName();
    var fontSize = item.sketchObject.fontSize();

    this.addNode({
      id: this.elementName,
      type: "font",
      label: formattedTextForText,
      color: this.lineColor(this.color),
      fontSize: fontSize,
      fontType: this.fontMap[fontName]
    });
  }
}
