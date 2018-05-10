import { IRectangle } from "../rectangle/rectangle";
import { IStyle } from "../style/style";
import { IFlow } from "../flow/flow";
import { Layer, ILayer } from "./layer";

interface IGridPosition {
  col: number;
  row: number;
}

export interface ILayerGroup {
  id: string;
  name: string;
  parent: any; // ILayerGroup | undefined
}

type IGridItem = IGrid | ILayer | undefined;

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

export class LayerGroup extends Layer implements ILayerGroup {
  id: string;
  name: string;
  parent: any;
  frame: IRectangle;
  style: IStyle;
  flow: IFlow;
  layers: ILayer[];
  rows: ILayer[][];
  columns: ILayer[][];
  grid: any;

  offsetMaps: {
    vertical: {};
    horizontal: {};
  };

  constructor(public group: any) {
    super(group);
    this.rows = this.resolveRows();
    this.columns = this.resolveColumns();
  }

  resolveGrid() {
    this.rows.map((row: ILayer[], rowIndex: number) => {
      row.map((layer: ILayer) => {
        const columnIndex = this.findMatchingColumnIndex(layer);
        this.setInGrid(layer, {
          col: columnIndex,
          row: rowIndex
        });
      });
    });
  }

  findMatchingColumnIndex(layer: ILayer): number {
    return 0;
  }

  setInGrid(layer: ILayer, position: IGridPosition) {
    this.grid.rows = this.grid.rows || {};
    const row = this.grid.rows[position.row] || {};
    row.columns = row.columns || {};
    row.columns[position.col] = layer;
  }

  resolveRows(): ILayer[][] {
    this.groupByVerticalOffset();
    const keys = this.sortedOffsetMap("vertical");
    const offsetMap = this.offsetMaps["vertical"];
    return keys.map((key: string) => {
      return offsetMap[key] as ILayer[];
    });
  }

  resolveColumns(): ILayer[][] {
    this.groupByHorizontalOffset();
    const keys = this.sortedOffsetMap("horizontal");
    const offsetMap = this.offsetMaps["horizontal"];
    return keys.map((key: string) => {
      return offsetMap[key] as ILayer[];
    });
  }

  // layers on same row (same start Y)
  groupByVerticalOffset(layers?: ILayer[]): void {
    layers = layers || this.layers;
    layers.map((layer: ILayer) => {
      const key = layer.rectParent.y;
      this.addToMap("vertical", key, layer);
    });
  }

  sortedOffsetMap(offsetMap: any): string[] {
    return Object.keys(offsetMap).sort((keyA: string, keyB: string) => {
      if (Number(keyA) == Number(keyB)) return 0;
      return Number(keyA) < Number(keyB) ? -1 : 1;
    });
  }

  // layers on same column (same start X)
  groupByHorizontalOffset() {}

  addToMap(map: any, key: any, layer: ILayer) {
    map = typeof map === "string" ? this.offsetMaps[map] : map;
    map[key] = map[key] || [];
    map[key].push(layer);
  }

  sortByVerticalPosition(layers?: ILayer[]) {
    layers = layers || this.layers;
    return layers.sort((layerA: ILayer, layerB: ILayer) => {
      if (layerA.rectParent.y == layerB.rectParent.y) return 0;
      return layerA.rectParent.y < layerB.rectParent.y ? -1 : 1;
    });
  }

  sortByHorizontalPosition(layers?: ILayer[]) {
    layers = layers || this.layers;
    return layers.sort((layerA: ILayer, layerB: ILayer) => {
      return layerA.rectParent.x;
    });
  }
}
