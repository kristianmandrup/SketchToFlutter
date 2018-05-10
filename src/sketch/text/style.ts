export class TextStyle {
  convert(l) {
    var s = "";
    var elementName = sanitizeName(l.name);

    // Special case for native fonts
    var fontName = l.sketchObject.fontPostscriptName();
    var fontSize = l.sketchObject.fontSize();

    if (fontName == "SFUIText-Semibold") {
      s += `${elementName}.font = .systemFont(ofSize: ${fontSize}, weight: UIFontWeightSemibold)`;
    } else if (fontName == "SFUIText-Regular") {
      s += `${elementName}.font = .systemFont(ofSize: ${fontSize})`;
    } else if (fontName == "SFUIText-Italic") {
      s += `${elementName}.font = .italicSystemFont(ofSize: ${fontSize})`;
    } else if (fontName == "SFUIText-Light") {
      s += `${elementName}.font = .systemFont(ofSize: ${fontSize}, weight: UIFontWeightLight)`;
    } else if (fontName == "SFUIText-Heavy") {
      s += `${elementName}.font = .systemFont(ofSize: ${fontSize}, weight: UIFontWeightHeavy)`;
    } else if (fontName == "SFUIText-Bold") {
      s += `${elementName}.font = .systemFont(ofSize: ${fontSize}, weight: UIFontWeightBold)`;
    } else if (fontName == "SFUIText-Medium") {
      s += `${elementName}.font = .systemFont(ofSize: ${fontSize}, weight: UIFontWeightMedium)`;
    } else if (fontName == "SFUIText-LightItalic") {
      var fontName = `${elementName}Font`;
      var fontDescriptorName = `${elementName}Descriptor`;
      s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize}, weight: UIFontWeightLight)`;
      s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits(.traitItalic)`;
      s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
      s += `${elementName}.font = ${fontName}`;
    } else if (fontName == "SFUIText-MediumItalic") {
      var fontName = `${elementName}Font`;
      var fontDescriptorName = `${elementName}Descriptor`;
      s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize}, weight: UIFontWeightMedium)`;
      s += "\n";
      s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits(.traitItalic)`;
      s += "\n";
      s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
      s += "\n";
      s += `${elementName}.font = ${fontName}`;
    } else if (fontName == "SFUIText-SemiboldItalic") {
      var fontName = `${elementName}Font`;
      var fontDescriptorName = `${elementName}Descriptor`;
      s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize}, weight: UIFontWeightSemibold)`;
      s += "\n";
      s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits(.traitItalic)`;
      s += "\n";
      s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
      s += "\n";
      s += `${elementName}.font = ${fontName}`;
    } else if (fontName == "SFUIText-BoldItalic") {
      var fontName = `${elementName}Font`;
      var fontDescriptorName = `${elementName}Descriptor`;
      s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize})`;
      s += "\n";
      s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits([.traitItalic, .traitBold])`;
      s += "\n";
      s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
      s += "\n";
      s += `${elementName}.font = ${fontName}`;
    } else if (fontName == "SFUIText-HeavyItalic") {
      var fontName = `${elementName}Font`;
      var fontDescriptorName = `${elementName}Descriptor`;
      s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize}, weight: UIFontWeightHeavy)`;
      s += "\n";
      s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits(.traitItalic)`;
      s += "\n";
      s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
      s += "\n";
      s += `${elementName}.font = ${fontName}`;
    } else {
      s += `${elementName}.font = UIFont(name: "${fontName}", size:${fontSize})`;
    }
    s += "\n";
    s += uicolorforText(l);
    s += "\n";
    if (l.alignment == "center") {
      s += `${elementName}.textAlignment = .center`;
      s += "\n";
    }
    s += `${elementName}.numberOfLines = 0`;
    s += "";
    return s;
  }
}
