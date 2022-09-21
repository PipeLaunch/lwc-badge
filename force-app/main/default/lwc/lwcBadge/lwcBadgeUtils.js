// @ts-check
/**
 * @description validates badge type to prevent invalid values
 * @param {String} input
 * @returns {String}
 */
export function validateType(input) {
  const VALID_TYPES = [
    "default",
    "darker",
    "lightest",
    "success",
    "warning",
    "error",
    "blue",
    "caps",
    "blue-dark",
    "blue-light",
    "blue-cool",
    "green-20",
  ];

  // @ts-ignore
  if (!input || input.length === 0 || !VALID_TYPES.includes(input)) {
    return "default";
  }
  return input;
}

/**
 * @description compute base type class
 * @param {String} type
 * @returns {String[]} cass class
 */
export function computeBadgeTypeClass(type = "default") {
  switch (type) {
    case "darker":
      return ["slds-badge", "slds-badge_inverse"];
    case "lightest":
      return ["slds-badge", "slds-badge_lightest"];
    case "success":
      return ["slds-badge", "slds-theme_success"];
    case "warning":
      return ["slds-badge", "slds-theme_warning"];
    case "error":
      return ["slds-badge", "slds-theme_error"];
    case "blue":
      return ["slds-badge", "slds-theme_blue"];
    case "blue-dark":
      return ["slds-badge", "slds-theme_blue-dark"];
    case "blue-light":
      return ["slds-badge", "slds-theme_blue-light"];
    case "blue-cool":
      return ["slds-badge", "slds-theme_blue-cool"];
    case "green-20":
      return ["slds-badge", "slds-theme_green-20"];
    case "caps":
      return ["slds-badge", "slds-badge_lightest", "slds-text-title_caps"];
    default:
      return ["slds-badge"];
  }
}

/**
 * @description compute icon variant
 * @param {String} type
 * @returns {String} icon variant
 */
export function computeIconVariant(type = "default") {
  const INVERSE_TYPES = ["darker", "success", "error", "blue"];
  // @ts-ignore
  if (INVERSE_TYPES.includes(type)) {
    return "inverse";
  }
  return "";
}

//TODO: maxwidth
// function checkValidCSSUnits(value) {
//   return /^\d+(px|em|rem|%)$/.test(value);
// }
