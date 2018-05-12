export class BaseType {
  prefix : string;
  view : any = {};

  constructor(public node : any) {}

  get type() : string {return this.node.type;}
  get name() : string {return this.node.name;}

  get isGroup() : boolean {
    return this.type === 'group';
  }

  hasPrefix(prefix?: any) : boolean {
    prefix = prefix || this.prefix;
    return prefix.test(this.name);
  }

  setViewProps(prefix?: any) : void {
    prefix = prefix || this.prefix;
    const parts = this
      .name
      .split(prefix);
    this.view.type = parts[0];
    this.view.name = parts[1];
  }

  matchesPrefix() : boolean {
    return this.hasPrefix(this.prefix);
  }

  matchesType() : boolean {return this.isGroup;}

  matches() {
    return this.matchesType() && this.matchesPrefix();
  }

  build() {
    if (!this.matches()) 
      return;
    this.setViewProps()
  }
}
