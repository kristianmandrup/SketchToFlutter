const fontMap = {
  'SFUIText-Semibold': {
    weight: 'UIFontWeightSemibold'
  },
  'SFUIText-Regular': {},
  'SFUIText-Italic': {
    type: 'italicSystemFont'
  },
  'SFUIText-Light': {
    weight: 'UIFontWeightLight'
  },
  'SFUIText-Heavy': {
    type: 'UIFontWeightHeavy'
  },
  'SFUIText-Bold': {
    type: 'UIFontWeightBold'
  },
  'SFUIText-Medium': {
    type: 'UIFontWeightMedium'
  },
  'SFUIText-LightItalic': {
    fn: 'lightItalic'
  },
  'SFUIText-MediumItalic': {
    fn: 'mediumItalic'
  },
  'SFUIText-SemiboldItalic': {
    fn: 'semiboldItalic'
  },
  'SFUIText-BoldItalic': {
    fn: 'boldItalic'
  },
  'SFUIText-HeavyItalic': {
    fn: 'heavyItalic'
  }
}

export class TextStyle {
  convert(l) {
    var elementName = this.sanitizeName(l.name);

    // Special case for native fonts
    var fontName = l
      .sketchObject
      .fontPostscriptName();
    var fontSize = l
      .sketchObject
      .fontSize();

  }

  lightItalic() {
    let s = ''
    var fontName = `${elementName}Font`;
    var fontDescriptorName = `${elementName}Descriptor`;
    s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize}, weight: UIFontWeightLight)`;
    s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits(.traitItalic)`;
    s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
    s += `${elementName}.font = ${fontName}`;
    return s
  }

  // SFUIText-MediumItalic
  mediumItalic() {
    let s = ''
    var fontName = `${elementName}Font`;
    var fontDescriptorName = `${elementName}Descriptor`;
    s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize}, weight: UIFontWeightMedium)`;
    s += "\n";
    s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits(.traitItalic)`;
    s += "\n";
    s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
    s += "\n";
    s += `${elementName}.font = ${fontName}`;
    return s
  }

  // SFUIText-SemiboldItalic")
  semiboldItalic() {
    let s = ''
    var fontName = `${elementName}Font`;
    var fontDescriptorName = `${elementName}Descriptor`;
    s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize}, weight: UIFontWeightSemibold)`;
    s += "\n";
    s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits(.traitItalic)`;
    s += "\n";
    s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
    s += "\n";
    s += `${elementName}.font = ${fontName}`;
    return s
  }
  // SFUIText-BoldItalic
  boldItalic() {
    let s
    var fontName = `${elementName}Font`;
    var fontDescriptorName = `${elementName}Descriptor`;
    s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize})`;
    s += "\n";
    s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits([.traitItalic, .traitBold])`;
    s += "\n";
    s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
    s += "\n";
    s += `${elementName}.font = ${fontName}`;
    return s
  }
  // SFUIText-HeavyItalic
  heavyItalic() {
    let s
    var fontName = `${elementName}Font`;
    var fontDescriptorName = `${elementName}Descriptor`;
    s += `var ${fontName}: UIFont = .systemFont(ofSize:${fontSize}, weight: UIFontWeightHeavy)`;
    s += "\n";
    s += `let ${fontDescriptorName} = ${fontName}.fontDescriptor.withSymbolicTraits(.traitItalic)`;
    s += "\n";
    s += `${fontName} = UIFont(descriptor: ${fontDescriptorName}!, size: 0)`;
    s += "\n";
    s += `${elementName}.font = ${fontName}`;

  }

  defaultFont() {
    let s
    s += `${elementName}.font = UIFont(name: "${fontName}", size:${fontSize})`;
    return s
  }

  terminate() {
    let s
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
