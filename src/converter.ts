import { Color } from "./color";

export class Converter {
  nodes = [];

  constructor() {}

  node(nodeObj: any) {
    return nodeObj;
  }

  addNode(nodeObj: any) {
    this.nodes = this.nodes.concat(nodeObj);
  }

  log(msg) {
    console.log(msg);
  }

  lineColor(color): any {
    return new Color(color).convert();
  }
}
