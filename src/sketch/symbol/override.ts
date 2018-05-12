import {ArtBoard} from "../artboard";
import {ISymbolMaster} from "./master";

// Should be converted to an instance that sets properties of the View component
export class SymbolOverride {
  property : string;
  value : any;

  constructor(public override : any) {}
}
