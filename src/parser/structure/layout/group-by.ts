import {ISized, IReorderTarget} from './_imports'

export class GroupBy {
  constructor(public target : IReorderTarget) {}

  get offsetMaps() : any {return this.target.offsetMaps;}

  get rectangles() : ISized[] {
    return this.target.rectangles;
  }

  // rectangles on same row (same start Y)
  groupByOffset(name : string = "vertical", rectangles?: ISized[]) : void {
    rectangles = rectangles || this.rectangles;
    rectangles.map((layer : ISized) => {
      const key = layer.y;
      this.addToMap(name, key, layer);
    });
  }

  addToMap(map : any, key : any, layer : ISized) {
    map = typeof map === "string"
      ? this.offsetMaps[map]
      : map;
    map[key] = map[key] || [];
    map[key].push(layer);
  }
}
