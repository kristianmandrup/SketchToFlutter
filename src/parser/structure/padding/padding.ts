import {IPosition} from "../../../generic";

export interface IDimension {
  coord : string
  less : string
  more : string
  type : 'vertical' | 'horizontal'
}

const VerticalDimension : IDimension = {
  coord: 'y',
  less: 'top',
  more: 'bottom',
  type: 'vertical'
}

const HorizontalDimension : IDimension = {
  coord: 'x',
  less: 'left',
  more: 'right',
  type: 'horizontal'
}

export interface IPadding {
  left?: number
  right?: number
  top?: number
  bottom?: number
}

// calculate padding between grouped layers
export class Padding {
  constructor(public settings : any) {}
}
