import {ArtBoard} from "../artboard";
import {ISymbolMaster} from "./master";

// Should be converted to a View component instance without any props set (ie.
// use only defaults)
export class SymbolInstance extends ArtBoard {
  symbolId : string;
  master : ISymbolMaster;
  overrides : any[];

  constructor(public symbol : any) {
    super(symbol);
    this.symbolId = symbol.symbolId;
  }
}
