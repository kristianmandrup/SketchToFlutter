import {ArtBoard} from "../artboard";

export interface ISymbolMaster {
  symbolId : string;
}

// Should be converted to a View component of some sort
export class SymbolMaster extends ArtBoard {
  symbolId : string;

  constructor(public symbol : any) {
    super(symbol);
    this.symbolId = symbol.symbolId;
  }
}
