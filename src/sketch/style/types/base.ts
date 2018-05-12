export class TypeResolver {
  constructor(public mode?: any) {}

  resolve(type : any) : string {
    return this
      .mode[type]
      .toLowerCase();
  }
}
