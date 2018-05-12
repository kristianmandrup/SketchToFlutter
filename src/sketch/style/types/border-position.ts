import {TypeResolver} from "./base";

enum mode {
  Center,
  Inside,
  Outside
}

export class BorderPositionType extends TypeResolver {
  mode = mode
}
