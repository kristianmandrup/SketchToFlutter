import {IPadding, IDimension} from "./padding";
import {IPosition, ISize} from "../../../generic";
import {Padding} from './padding'

interface ILayer {
  padding : IPadding
  position : IPosition
  size : ISize
}

export class Padder {
  padding : any
  list : any[]

  constructor(public layerA : ILayer, public layerB : ILayer) {
    this.list = [layerA, layerB]
  }

  get posA() {
    return this.layerA.position
  }

  get posB() {
    return this.layerB.position
  }

  buildPadding(dim : IDimension) : any {
    this.layerA.padding = this.layerA.padding || {}

    const {coord, less, more} = dim;
    const a = this.posA[dim.coord];
    const b = this.posB[dim.coord];
    const paddingSize = Math.abs(a - b);
    if (paddingSize === 0) {
      return
    }
    return new Padding({
      [dim.type]: paddingSize
    });
  }

  // insert or link to padding class between each row or column item
  setPadding(dim : IDimension) {
    const padding = this.buildPadding(dim)
    if (!padding) {
      return
    }
    this.padding = padding
    this.list = [this.layerA, this.padding, this.layerB]
  }

  horizontal(layerA : ILayer, posA : IPosition, posB : IPosition) {
    this.setPadding({coord: 'x', less: 'left', more: 'right', type: 'horizontal'})
  }

  vertical(layerA : ILayer, posA : IPosition, posB : IPosition) {
    this.setPadding({coord: 'y', less: 'top', more: 'bottom', type: 'vertical'})
  }
}
