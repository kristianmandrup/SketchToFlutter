import {TypeResolver} from "./base";

enum mode {
  Linear,
  Radial,
  Angular

}

export class GradientType extends TypeResolver {
  mode = mode
}
