import { ArtBoard } from "../artboard";

export interface ISymbolMaster {
  symbolId: string;
}

export class SymbolMaster extends ArtBoard {
  symbolId: string;

  constructor(public symbol: any) {
    super(symbol);
    this.symbolId = symbol.symbolId;
  }
}
