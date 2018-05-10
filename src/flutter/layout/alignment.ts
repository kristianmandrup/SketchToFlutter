interface ICenterOffset {
  horizontal: number;
  vertical: number;
}

enum AlignPosition {
  Center,
  CenterLeft,
  CenterRight,
  BottomLeft,
  BottomRight,
  BottomCenter,
  TopLeft,
  TopRight,
  TopCenter
}

export interface IAlignment {
  centerOffset: ICenterOffset;
  position: AlignPosition;
}
