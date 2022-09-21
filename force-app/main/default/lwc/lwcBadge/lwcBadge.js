/**
 * @description       : LWC Badge
 * @group             : Generic Components
 * @last modified on  : 21-09-2022
 * @last modified by  : samuel@pipelaunch.com
 **/
import { LightningElement, api } from "lwc";

import * as utils from "./lwcBadgeUtils";

export default class IbsBadge extends LightningElement {
  @api label = "";
  @api minWidth = null; // TODO
  @api maxWidth = null;

  @api helptext = false;
  @api iconName = false;

  @api get type() {
    return this._type;
  }
  _type = "default";
  set type(value) {
    this._type = utils.validateType(value);
  }

  //   renderedCallback(){
  //       if (this.isRendered) return;
  //   }

  get computeClasses() {
    const classes = utils.computeBadgeTypeClass(this._type);
    classes.push("ibs-badge");
    return classes.join(" ");
  }

  get computeIconVariant() {
    return utils.computeIconVariant(this._type);
  }
}
