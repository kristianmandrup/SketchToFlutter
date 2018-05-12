export class CodeWriter {
  lines = []
  ast : any

  constructor(public opts : any) {}

  use(ast : any) {
    this.ast = ast
  }

  astToLines() : void {}

  write() {
    // Print + copy
    let fullText = ""
    this
      .lines
      .forEach((line) => {
        fullText += line + "\n"
      })
    return fullText
  }
}
