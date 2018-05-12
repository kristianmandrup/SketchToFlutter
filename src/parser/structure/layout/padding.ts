import {IPosition} from "../../../generic";

interface IDimension {
  coord : string
  less : string
  more : string

}

interface IPadding {
  left?: number
  right?: number
  top?: number
  bottom?: number
}

interface ILayer {
  padding : IPadding
}

const VerticalDimension : IDimension = {
  coord: 'y',
  less: 'top',
  more: 'bottom'
}

const HorizontalDimension : IDimension = {
  coord: 'x',
  less: 'left',
  more: 'right'
}

// calculate padding between grouped layers
export class Padding {
  setPading(layerA : ILayer, posA : IPosition, posB : IPosition, dim : IDimension) {
    layerA.padding = layerA.padding || {}

    const {coord, less, more} = dim
    const a = posA[dim.coord]
    const b = posB[dim.coord]
    const padding = Math.abs(a - b)
    if (a < b) {
      layerA.padding[more] = padding
    }
    if (a > b) {
      layerA.padding[less] = padding
    }
  }

  horizontal(layerA : ILayer, posA : IPosition, posB : IPosition) {
    this.setPading(layerA, posA, posB, {
      coord: 'x',
      less: 'left',
      more: 'right'
    })
  }

  vertical(layerA : ILayer, posA : IPosition, posB : IPosition) {
    this.setPading(layerA, posA, posB, {
      coord: 'y',
      less: 'top',
      more: 'bottom'
    })
  }
}
