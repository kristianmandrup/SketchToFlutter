import {TypeResolver} from "./base";

enum mode {
  Miter,
  Round
}

export class LineJoinType extends TypeResolver {
  mode = mode
}
