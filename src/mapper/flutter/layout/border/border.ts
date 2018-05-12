import { IBorderSide } from "./side";

export class BorderRadius {}

export interface IBorder {
  top: IBorderSide;
  left: IBorderSide;
  right: IBorderSide;
  bottom: IBorderSide;
}

export class Border implements IBorder {
  top: IBorderSide;
  left: IBorderSide;
  right: IBorderSide;
  bottom: IBorderSide;
}
