export interface IFlow {
  target: {
    id: string;
  };
}

export class FlowNode {
  targetId: string;
  constructor(public flow: IFlow) {
    this.targetId = flow.target.id;
  }
}
