function onRun(context) { // Comment to launch script in Sketch "Custom Script"
  parse(context)
}; // Comment to launch script in Sketch "Custom Script"

const Document = require('sketch/dom').Document
const document = Document.getSelectedDocument()

function parse(context) {
  var lines = []
  var selection = context.api().selectedDocument.selectedLayers
  selection.iterate(function (item) {
    if (item.isText) {
      write(declarationsForSingleText(item))
      write(`${sanitizeName(item.name)}.text = ${formattedTextForText(item.text)}`)
      write(styleForText(item))
    }
  });

  // Print + copy
  var fullText = ""
  lines.forEach(function (line) {
    fullText += line + "\n"
  })
  log(fullText)
  copyText(fullText)

  function write(text) {
    lines.push(text)
  }

}

function copyText(text) {
  var pasteBoard = [NSPasteboard generalPasteboard];
  [pasteBoard declareTypes: [NSArray arrayWithObject: NSPasteboardTypeString] owner: nil];
  [pasteBoard setString: text forType: NSPasteboardTypeString];
}
