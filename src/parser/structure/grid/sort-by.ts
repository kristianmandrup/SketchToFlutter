import {ISized, IReorderTarget} from './_imports'

export class SortBy {
  constructor(public target : IReorderTarget) {}

  get offsetMaps() : any {return this.target.offsetMaps;}

  get rectangles() : ISized[] {
    return this.target.rectangles;
  }

  sortedOffsetMap(offsetMap : any) : string[] {
    const keys = Object.keys(offsetMap);
    return keys.sort((keyA : string, keyB : string) => {
      if (Number(keyA) == Number(keyB)) 
        return 0;
      return Number(keyA) < Number(keyB)
        ? -1
        : 1;
    });
  }

  sortBy(prop : string = "x", rectangles?: ISized[]) {
    rectangles = rectangles || this.rectangles;
    return rectangles.sort((rectA : ISized, rectB : ISized) => {
      if (rectA[prop] == rectB[prop]) 
        return 0;
      return rectA[prop] < rectB[prop]
        ? -1
        : 1;
    });
  }
}
