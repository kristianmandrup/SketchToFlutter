import { ArtBoard } from "../artboard";
import { ISymbolMaster } from "./master";

export class SymbolInstance extends ArtBoard {
  symbolId: string;
  master: ISymbolMaster;
  overrides: any[];

  constructor(public symbol: any) {
    super(symbol);
    this.symbolId = symbol.symbolId;
  }
}
