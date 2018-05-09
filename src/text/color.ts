class TextColor {
  node(text) {
    this.addNode({
      type: "color",
      id: sanitizeName(text.name),
      value: this.lineColor(text.sketchObject.textColor())
    });
  }
}
