export class BaseMapper {
  nodes = [];

  constructor(public obj: any) {}

  node(nodeObj: any) {
    return nodeObj;
  }

  addNode(nodeObj: any) {
    this.nodes = this.nodes.concat(nodeObj);
  }

  lineColor(color): any {
    // return new Color(color).convert();
  }

  sanitizeName(str) {
    return this.lowerCaseFirstLetter(this.removeSpaces(str));
  }

  lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  removeSpaces(str) {
    return str.replace(/\s+/g, "");
  }
}
