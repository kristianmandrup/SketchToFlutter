import {TypeResolver} from "./base";

enum mode {
  Gaussian,
  Motion,
  Zoom,
  Background
}

export class BlurType extends TypeResolver {
  mode = mode
}
