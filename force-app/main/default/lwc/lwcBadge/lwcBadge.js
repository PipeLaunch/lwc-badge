/**
 * @description       : LWC Badge
 * @group             : Generic Components
 * @last modified on  : 24-09-2022
 * @last modified by  : samuel@pipelaunch.com
 **/
import { LightningElement, api } from "lwc";

import * as utils from "./lwcBadgeUtils";

export default class LwcBadge extends LightningElement {
  /**
   * @description type of badge
   */
  @api label = "";
  @api helptext = false;
  @api iconName = false;

  @api get minWidth() {
    return this._minWidth;
  }
  _minWidth = null;
  set minWidth(value) {
    this._minWidth = utils.validateCSSUnits(value);
  }

  @api get maxWidth() {
    return this._maxWidth;
  }
  _maxWidth = null;
  set maxWidth(value) {
    this._maxWidth = utils.validateCSSUnits(value);
  }

  @api get type() {
    return this._type;
  }
  _type = "default";
  set type(value) {
    this._type = utils.validateType(value);
  }

  get computeStyles() {
    return utils.computeStyles(this);
  }

  /**
   * @type {String} badge main classes
   */
  get computeClasses() {
    return utils.computeClasses(this._type);
  }

  /**
   * @type {String} icon variant
   */
  get computeIconVariant() {
    return utils.computeIconVariant(this._type);
  }
}
