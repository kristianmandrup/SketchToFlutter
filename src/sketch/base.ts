import {Serializer} from "../serializer";

export class BaseSketchElement {
  type = 'unknown'

  serializedProps() {
    return ['type']
  }

  get map() {
    return this
      .serializedProps()
      .reduce((acc : any, name : string) => {
        acc[name] = this[name]
        return acc
      }, {})
  }

  serializer() {
    return new Serializer(this.map)
  }

  serialize() {}
}
