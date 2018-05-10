export class BorderStyles {
  style: string;
  position: string;

  constructor(public border: any) {}
}

export class LineJoin {
  constructor(public map: any) {}

  resolve(type: any): string {
    const { map } = this;
    switch (type) {
      case map.Miter:
        return "straight";
      case map.Round:
        return "round";
    }
  }
}

export class Position {
  constructor(public map: any) {}

  resolve(type: any): string {
    const { map } = this;
    switch (type) {
      case map.Center:
        return "center";
      case map.Outside:
        return "outside";
      case map.Inside:
        return "inside";
    }
  }
}
