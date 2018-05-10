export class GradientType {
  constructor(public map: any) {}

  resolve(type: any): string {
    const { map } = this;
    switch (type) {
      case map.Linear:
        return "linear";
      case map.Radial:
        return "radial";
      case map.Angular:
        return "angular";
    }
  }
}
