export class BlurType {
  constructor(public map: any) {}

  resolve(type: any): string {
    const { map } = this;
    switch (type) {
      case map.Gaussian:
        return "gaussian";
      case map.Motion:
        return "motion";
      case map.Zoom:
        return "zoom";
      case map.Background:
        return "background";
    }
  }
}
