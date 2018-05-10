interface IGridPosition {
  col: number;
  row: number;
}

interface IRectangle {
  width: number;
  height: number;
  x: number;
  y: number;
}

type IGridItem = IGrid | IRectangle | undefined;

interface IGrid {
  rows?: IGridRow[];
  columns?: IGridColumn[];
}

interface IGridRow {
  columns: IGridItem[];
}

interface IGridColumn {
  rows: IGridRow[];
}

export class GridLayout {
  rectangles: IRectangle[];

  rows: IRectangle[][];
  columns: IRectangle[][];
  grid: any;

  offsetMaps: {
    vertical: {};
    horizontal: {};
  };

  constructor(public group: any) {
    this.rectangles = group.rectangles;
    this.rows = this.resolveRows();
    this.columns = this.resolveColumns();
  }

  resolveGrid() {
    this.rows.map((row: IRectangle[], rowIndex: number) => {
      row.map((layer: IRectangle) => {
        const columnIndex = this.findMatchingColumnIndex(layer);
        this.setInGrid(layer, {
          col: columnIndex,
          row: rowIndex
        });
      });
    });
  }

  findMatchingColumnIndex(layer: IRectangle): number {
    return 0;
  }

  setInGrid(layer: IRectangle, position: IGridPosition) {
    this.grid.rows = this.grid.rows || {};
    const row = this.grid.rows[position.row] || {};
    row.columns = row.columns || {};
    row.columns[position.col] = layer;
  }

  resolveRows(): IRectangle[][] {
    this.groupByOffset("vertical");
    const keys = this.sortedOffsetMap("vertical");
    const offsetMap = this.offsetMaps["vertical"];
    return keys.map((key: string) => {
      return offsetMap[key] as IRectangle[];
    });
  }

  resolveColumns(): IRectangle[][] {
    this.groupByOffset("horizontal");
    const keys = this.sortedOffsetMap("horizontal");
    const offsetMap = this.offsetMaps["horizontal"];
    return keys.map((key: string) => {
      return offsetMap[key] as IRectangle[];
    });
  }

  // rectangles on same row (same start Y)
  groupByOffset(name: string = "vertical", rectangles?: IRectangle[]): void {
    rectangles = rectangles || this.rectangles;
    rectangles.map((layer: IRectangle) => {
      const key = layer.y;
      this.addToMap(name, key, layer);
    });
  }

  sortedOffsetMap(offsetMap: any): string[] {
    const keys = Object.keys(offsetMap);
    return keys.sort((keyA: string, keyB: string) => {
      if (Number(keyA) == Number(keyB)) return 0;
      return Number(keyA) < Number(keyB) ? -1 : 1;
    });
  }

  addToMap(map: any, key: any, layer: IRectangle) {
    map = typeof map === "string" ? this.offsetMaps[map] : map;
    map[key] = map[key] || [];
    map[key].push(layer);
  }

  sortBy(prop: string = "x", rectangles?: IRectangle[]) {
    rectangles = rectangles || this.rectangles;
    return rectangles.sort((rectA: IRectangle, rectB: IRectangle) => {
      if (rectA[prop] == rectB[prop]) return 0;
      return rectA[prop] < rectB[prop] ? -1 : 1;
    });
  }
}
