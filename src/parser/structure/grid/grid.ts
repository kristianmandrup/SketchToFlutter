import {ISized} from './_imports'
import {SortBy} from './sort-by';
import {GroupBy} from './group-by';

interface IGridPosition {
  col : number;
  row : number;
}

type IGridItem = IGrid | ISized | undefined;

interface IGrid {
  rows?: IGridRow[];
  columns?: IGridColumn[];
}

interface IGridRow {
  columns : IGridItem[];
}

interface IGridColumn {
  rows : IGridRow[];
}

export class GridLayout {
  rectangles : ISized[];

  rows : ISized[][];
  columns : ISized[][];
  grid : any;

  offsetMaps : {
    vertical: {};
    horizontal: {};
  };

  constructor(public group : any) {
    this.rectangles = group.rectangles;
    this.rows = this.resolveRows();
    this.columns = this.resolveColumns();
  }

  resolveGrid() {
    this
      .rows
      .map((row : ISized[], rowIndex : number) => {
        row.map((layer : ISized) => {
          const columnIndex = this.findMatchingColumnIndex(layer);
          this.setInGrid(layer, {
            col: columnIndex,
            row: rowIndex
          });
        });
      });
  }

  findMatchingColumnIndex(layer : ISized) : number {return 0;}

  setInGrid(layer : ISized, position : IGridPosition) {
    this.grid.rows = this.grid.rows || {};
    const row = this.grid.rows[position.row] || {};
    row.columns = row.columns || {};
    row.columns[position.col] = layer;
  }

  resolveRows() : ISized[][]{
    this.groupByOffset("vertical");
    const keys = this.sortedOffsetMap("vertical");
    const offsetMap = this.offsetMaps["vertical"];
    return keys.map((key : string) => {
      return offsetMap[key]as ISized[];
    });
  }

  resolveColumns() : ISized[][]{
    this.groupByOffset("horizontal");
    const keys = this.sortedOffsetMap("horizontal");
    const offsetMap = this.offsetMaps["horizontal"];
    return keys.map((key : string) => {
      return offsetMap[key]as ISized[];
    });
  }

  groupByOffset(name : string = "vertical", rectangles?: ISized[]) : void {
    new GroupBy(this).groupByOffset(name, rectangles)
  }

  sortedOffsetMap(offsetMap : any) : string[] {
    return new SortBy(this).sortedOffsetMap(offsetMap)
  }

}
