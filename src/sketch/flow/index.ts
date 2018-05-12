import {BaseSketchElement} from "../base";

export interface IFlow {
  target : {
    id: string;
  };
}

export class FlowNode extends BaseSketchElement {
  type = 'flow'

  targetId : string;
  constructor(public flow : IFlow) {
    super()
    this.targetId = flow.target.id;
  }

  serializedProps() {
    return ['targetId']
  }
}
