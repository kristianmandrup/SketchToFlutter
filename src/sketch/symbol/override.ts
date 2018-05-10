import { ArtBoard } from "../artboard";
import { ISymbolMaster } from "./master";

export class SymbolOverride {
  property: string;
  value: any;

  constructor(public override: any) {}
}
