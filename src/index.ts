function onRun(context) {
  // Comment to launch script in Sketch "Custom Script"

  var isArtboardSelected = false;
  var selection = context.api().selectedDocument.selectedLayers;

  selection.iterate(function(item) {
    if (item.isArtboard) {
      isArtboardSelected = true;
    }
  });

  if (isArtboardSelected) {
    this.parseArtboard(context);
  } else {
    this.parseSingleElement(context);
  }
} // Comment to launch script in Sketch "Custom Script"

parseSingleElement(context) {
  var lines = [];
  var selection = context.api().selectedDocument.selectedLayers;
  selection.iterate(function(item) {
    if (item.isText) {
      write(declarationsForSingleText(item));
      write(
        `${sanitizeName(item.name)}.text = ${formattedTextForText(item.text)}`
      );
      write(styleForText(item));
    }
  });

  // Print + copy
  var fullText = "";
  lines.forEach(function(line) {
    fullText += line + "\n";
  });
  this.log(fullText);
  this.copyText(fullText);

  function write(text) {
    lines.push(text);
  }
}

function formattedTextForText(t) {
  if (t == t.toUpperCase()) {
    return `"${capitalizedCase(t.toLowerCase())}".uppercased()`;
  } else {
    return `"${t}"`;
  }
}

function capitalizedCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function uikitViewHierarchy(elements) {
  var s = "";
  elements.map(function(e) {
    s +=
      `        ${sanitizeName(
        e.name
      )}.translatesAutoresizingMaskIntoConstraints = false` + "\n";
  });
  s += "\n";
  elements.reverse().map(function(e) {
    s += `        addSubview(${sanitizeName(e.name)})` + "\n";
  });
  return s;
}

function sanitizeName(str) {
  return lowerCaseFirstLetter(removeSpaces(str));
}

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}
