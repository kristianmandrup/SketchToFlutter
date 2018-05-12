import {autobind} from "core-decorators";
import {BaseSketchElement} from "../base";

export class ArtboardItem {
  get serializedProps() {
    return ['label', 'shapes']
  }

  constructor(public artboard : any) {}

  @autobind()
  extract(element : any) {
    // methods
    const {addToLabels, addToShapes, addToGroups, addToElements} = this;

    // add to type container
    addToLabels(element) || addToShapes(element) || addToGroups(element);

    // add to list of all elements
    addToElements(element);
  }

  addToElements(element : any) {
    this.addTo('elements', element)
  }

  addTo(colName : string, element : any) {
    this
      .artboard[colName]
      .push(element);
  }

  @autobind()
  addToLabels(element) {
    if (!element.isText) 
      return;
    this.addTo('labels', element)
  }

  @autobind()
  addToShapes(element) {
    if (!element.isShape) 
      return;
    this.addTo('shapes', element)
  }

  @autobind()
  addToGroups(element) {
    if (!element.isGroup) 
      return;
    this.addTo('groups', element)
  }
}
