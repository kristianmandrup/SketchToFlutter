export class Serializer {
  constructor(public propsMap : any) {}

  serialize() {
    Object
      .keys(this.propsMap)
      .reduce((acc : any, name : string) => {
        const item = this.propsMap[name]
        acc[name] = this.serializeGeneric(name, item)
        return acc
      }, {})
  }

  serializeGeneric(name : string, item : any) {
    return Array.isArray(item)
      ? this.serializeList(name, item)
      : this.serializeItem(name, item)
  }

  serializeList(name : string, list : any[]) {
    return {
      [name]: list.map(item => {
        return this.serializeItem(item.type, item)
      })
    }
  }

  serializeItem(name : string, item : any) {
    return {
      [name]: this.serializeLeaf(item)
    }
  }

  serializeLeaf(item) {
    if (typeof item.serialize === 'function') {
      return item.serialize()
    }
    return item
  }

}
