export class FillType {
  constructor(public map: any) {}

  resolve(type: any): string {
    const { map } = this;
    switch (type) {
      case map.Color:
        return "color";
      case map.Gradient:
        return "gradient";
      case map.Pattern:
        return "pattern";
      case map.Noise:
        return "noise";
    }
  }
}
