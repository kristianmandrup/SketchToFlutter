import {TypeResolver} from "./base";

enum mode {
  Normal,
  Darken,
  Multiply,
  ColorBurn,
  Lighten,
  Screen,
  ColorDodge,
  Overlay,
  SoftLight,
  HardLight,
  Difference,
  Exclusion,
  Hue,
  Saturation,
  Color,
  Luminosity
}

export class BlendingModeType extends TypeResolver {
  mode = mode
}
