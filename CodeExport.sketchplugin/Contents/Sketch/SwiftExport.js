function onRun(context) { // Comment to launch script in Sketch "Custom Script"
  parse(context)
}; // Comment to launch script in Sketch "Custom Script"
const platform = 'swift'
const Document = require('sketch/dom').Document
const document = Document.getSelectedDocument()

const ctx = {
  platform: platform,
  lines: [],
  selection: context.api().selectedDocument.selectedLayers,
  model: {}
}

function createSketchModel(selection) {
  return new SketchModel(selection || ctx.selection)
}

function createViewModelParser(model) {
  return new ViewModelParser(model || ctx.model.sketch)
}

function createMappedUIModel(platform, model) {
  return new MappedUIModel(model, platform)
}

function parse(context) {
  const opts = {}

  ctx.selection = context.api().selectedDocument.selectedLayers
  ctx.model.sketch = createSketchModel(selection)
  ctx.model.parsed = createViewModelParser(ctx.model.sketch).parse()
  ctx.model.mapped = createMappedUIModel(ctx.platform, ctx.model.parsed)

  const sourceCodeTxt = createCodeWriter(opts).use(ctx.model.mapped).write()
  copyText(sourceCodeTxt)
}

function copyText(text) {
  var pasteBoard = [NSPasteboard generalPasteboard];
  [pasteBoard declareTypes: [NSArray arrayWithObject: NSPasteboardTypeString] owner: nil];
  [pasteBoard setString: text forType: NSPasteboardTypeString];
}
