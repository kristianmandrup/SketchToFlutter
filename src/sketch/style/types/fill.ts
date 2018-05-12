import {TypeResolver} from "./base";

enum mode {
  Color,
  Gradient,
  Pattern,
  Noise
}
export class FillType extends TypeResolver {
  mode = mode
}
