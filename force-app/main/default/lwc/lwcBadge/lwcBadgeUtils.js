// @ts-check

const TYPES = [
  { value: "default", classes: "" },
  { value: "darker", classes: "slds-badge_inverse" },
  { value: "lightest", classes: "slds-badge_lightest" },
  { value: "success", classes: "slds-theme_success" },
  { value: "warning", classes: "slds-theme_warning" },
  { value: "error", classes: "slds-theme_error" },
  { value: "caps", classes: "slds-badge_lightest slds-text-title_caps" },
  { value: "blue", classes: "slds-theme_blue" },
  { value: "blue-dark", classes: "slds-theme_blue-dark" },
  { value: "blue-light", classes: "slds-theme_blue-light" },
  { value: "blue-cool", classes: "slds-theme_blue-cool" },
  { value: "green-20", classes: "slds-theme_green-20" },
  { value: "gray-2", classes: "slds-theme_gray-2" },
  { value: "gray-3", classes: "slds-theme_gray-3" },
  { value: "gray-4", classes: "slds-theme_gray-4" },
  { value: "gray-5", classes: "slds-theme_gray-5" },
  { value: "gray-6", classes: "slds-theme_gray-6" },
  { value: "gray-7", classes: "slds-theme_gray-7" },
  { value: "gray-8", classes: "slds-theme_gray-8" },
  { value: "gray-9", classes: "slds-theme_gray-9" },
  { value: "gray-10", classes: "slds-theme_gray-10" },
  { value: "gray-11", classes: "slds-theme_gray-11" },
  { value: "gray-12", classes: "slds-theme_gray-12" },
  { value: "gray-13", classes: "slds-theme_gray-13" },
  { value: "blue-10", classes: "slds-theme_blue-10" },
  { value: "blue-15", classes: "slds-theme_blue-15" },
  { value: "blue-20", classes: "slds-theme_blue-20" },
  { value: "blue-30", classes: "slds-theme_blue-30" },
  { value: "blue-40", classes: "slds-theme_blue-40" },
  { value: "blue-50", classes: "slds-theme_blue-50" },
  { value: "blue-60", classes: "slds-theme_blue-60" },
  { value: "blue-65", classes: "slds-theme_blue-65" },
  { value: "blue-70", classes: "slds-theme_blue-70" },
  { value: "blue-80", classes: "slds-theme_blue-80" },
  { value: "blue-90", classes: "slds-theme_blue-90" },
  { value: "blue-95", classes: "slds-theme_blue-95" },
  { value: "cloud-blue-10", classes: "slds-theme_cloud-blue-10" },
  { value: "cloud-blue-15", classes: "slds-theme_cloud-blue-15" },
  { value: "cloud-blue-20", classes: "slds-theme_cloud-blue-20" },
  { value: "cloud-blue-30", classes: "slds-theme_cloud-blue-30" },
  { value: "cloud-blue-40", classes: "slds-theme_cloud-blue-40" },
  { value: "cloud-blue-50", classes: "slds-theme_cloud-blue-50" },
  { value: "cloud-blue-60", classes: "slds-theme_cloud-blue-60" },
  { value: "cloud-blue-65", classes: "slds-theme_cloud-blue-65" },
  { value: "cloud-blue-70", classes: "slds-theme_cloud-blue-70" },
  { value: "cloud-blue-80", classes: "slds-theme_cloud-blue-80" },
  { value: "cloud-blue-90", classes: "slds-theme_cloud-blue-90" },
  { value: "cloud-blue-95", classes: "slds-theme_cloud-blue-95" },
  { value: "green-10", classes: "slds-theme_green-10" },
  { value: "green-15", classes: "slds-theme_green-15" },
  { value: "green-20", classes: "slds-theme_green-20" },
  { value: "green-30", classes: "slds-theme_green-30" },
  { value: "green-40", classes: "slds-theme_green-40" },
  { value: "green-50", classes: "slds-theme_green-50" },
  { value: "green-60", classes: "slds-theme_green-60" },
  { value: "green-65", classes: "slds-theme_green-65" },
  { value: "green-70", classes: "slds-theme_green-70" },
  { value: "green-80", classes: "slds-theme_green-80" },
  { value: "green-90", classes: "slds-theme_green-90" },
  { value: "green-95", classes: "slds-theme_green-95" },
  { value: "hot-orange-10", classes: "slds-theme_hot-orange-10" },
  { value: "hot-orange-15", classes: "slds-theme_hot-orange-15" },
  { value: "hot-orange-20", classes: "slds-theme_hot-orange-20" },
  { value: "hot-orange-30", classes: "slds-theme_hot-orange-30" },
  { value: "hot-orange-40", classes: "slds-theme_hot-orange-40" },
  { value: "hot-orange-50", classes: "slds-theme_hot-orange-50" },
  { value: "hot-orange-60", classes: "slds-theme_hot-orange-60" },
  { value: "hot-orange-65", classes: "slds-theme_hot-orange-65" },
  { value: "hot-orange-70", classes: "slds-theme_hot-orange-70" },
  { value: "hot-orange-80", classes: "slds-theme_hot-orange-80" },
  { value: "hot-orange-90", classes: "slds-theme_hot-orange-90" },
  { value: "hot-orange-95", classes: "slds-theme_hot-orange-95" },
  { value: "indigo-10", classes: "slds-theme_indigo-10" },
  { value: "indigo-15", classes: "slds-theme_indigo-15" },
  { value: "indigo-20", classes: "slds-theme_indigo-20" },
  { value: "indigo-30", classes: "slds-theme_indigo-30" },
  { value: "indigo-40", classes: "slds-theme_indigo-40" },
  { value: "indigo-50", classes: "slds-theme_indigo-50" },
  { value: "indigo-60", classes: "slds-theme_indigo-60" },
  { value: "indigo-65", classes: "slds-theme_indigo-65" },
  { value: "indigo-70", classes: "slds-theme_indigo-70" },
  { value: "indigo-80", classes: "slds-theme_indigo-80" },
  { value: "indigo-90", classes: "slds-theme_indigo-90" },
  { value: "indigo-95", classes: "slds-theme_indigo-95" },
  { value: "neutral-10", classes: "slds-theme_neutral-10" },
  { value: "neutral-20", classes: "slds-theme_neutral-20" },
  { value: "neutral-30", classes: "slds-theme_neutral-30" },
  { value: "neutral-40", classes: "slds-theme_neutral-40" },
  { value: "neutral-50", classes: "slds-theme_neutral-50" },
  { value: "neutral-60", classes: "slds-theme_neutral-60" },
  { value: "neutral-70", classes: "slds-theme_neutral-70" },
  { value: "neutral-80", classes: "slds-theme_neutral-80" },
  { value: "neutral-90", classes: "slds-theme_neutral-90" },
  { value: "neutral-95", classes: "slds-theme_neutral-95" },
  { value: "neutral-100", classes: "slds-theme_neutral-100" },
  { value: "orange-10", classes: "slds-theme_orange-10" },
  { value: "orange-15", classes: "slds-theme_orange-15" },
  { value: "orange-20", classes: "slds-theme_orange-20" },
  { value: "orange-30", classes: "slds-theme_orange-30" },
  { value: "orange-40", classes: "slds-theme_orange-40" },
  { value: "orange-50", classes: "slds-theme_orange-50" },
  { value: "orange-60", classes: "slds-theme_orange-60" },
  { value: "orange-65", classes: "slds-theme_orange-65" },
  { value: "orange-70", classes: "slds-theme_orange-70" },
  { value: "orange-80", classes: "slds-theme_orange-80" },
  { value: "orange-90", classes: "slds-theme_orange-90" },
  { value: "orange-95", classes: "slds-theme_orange-95" },
  { value: "pink-10", classes: "slds-theme_pink-10" },
  { value: "pink-15", classes: "slds-theme_pink-15" },
  { value: "pink-20", classes: "slds-theme_pink-20" },
  { value: "pink-30", classes: "slds-theme_pink-30" },
  { value: "pink-40", classes: "slds-theme_pink-40" },
  { value: "pink-50", classes: "slds-theme_pink-50" },
  { value: "pink-60", classes: "slds-theme_pink-60" },
  { value: "pink-65", classes: "slds-theme_pink-65" },
  { value: "pink-70", classes: "slds-theme_pink-70" },
  { value: "pink-80", classes: "slds-theme_pink-80" },
  { value: "pink-90", classes: "slds-theme_pink-90" },
  { value: "pink-95", classes: "slds-theme_pink-95" },
  { value: "purple-10", classes: "slds-theme_purple-10" },
  { value: "purple-15", classes: "slds-theme_purple-15" },
  { value: "purple-20", classes: "slds-theme_purple-20" },
  { value: "purple-30", classes: "slds-theme_purple-30" },
  { value: "purple-40", classes: "slds-theme_purple-40" },
  { value: "purple-50", classes: "slds-theme_purple-50" },
  { value: "purple-60", classes: "slds-theme_purple-60" },
  { value: "purple-65", classes: "slds-theme_purple-65" },
  { value: "purple-70", classes: "slds-theme_purple-70" },
  { value: "purple-80", classes: "slds-theme_purple-80" },
  { value: "purple-90", classes: "slds-theme_purple-90" },
  { value: "purple-95", classes: "slds-theme_purple-95" },
  { value: "red-10", classes: "slds-theme_red-10" },
  { value: "red-15", classes: "slds-theme_red-15" },
  { value: "red-20", classes: "slds-theme_red-20" },
  { value: "red-30", classes: "slds-theme_red-30" },
  { value: "red-40", classes: "slds-theme_red-40" },
  { value: "red-50", classes: "slds-theme_red-50" },
  { value: "red-60", classes: "slds-theme_red-60" },
  { value: "red-65", classes: "slds-theme_red-65" },
  { value: "red-70", classes: "slds-theme_red-70" },
  { value: "red-80", classes: "slds-theme_red-80" },
  { value: "red-90", classes: "slds-theme_red-90" },
  { value: "red-95", classes: "slds-theme_red-95" },
  { value: "teal-10", classes: "slds-theme_teal-10" },
  { value: "teal-15", classes: "slds-theme_teal-15" },
  { value: "teal-20", classes: "slds-theme_teal-20" },
  { value: "teal-30", classes: "slds-theme_teal-30" },
  { value: "teal-40", classes: "slds-theme_teal-40" },
  { value: "teal-50", classes: "slds-theme_teal-50" },
  { value: "teal-60", classes: "slds-theme_teal-60" },
  { value: "teal-65", classes: "slds-theme_teal-65" },
  { value: "teal-70", classes: "slds-theme_teal-70" },
  { value: "teal-80", classes: "slds-theme_teal-80" },
  { value: "teal-90", classes: "slds-theme_teal-90" },
  { value: "teal-95", classes: "slds-theme_teal-95" },
  { value: "violet-10", classes: "slds-theme_violet-10" },
  { value: "violet-15", classes: "slds-theme_violet-15" },
  { value: "violet-20", classes: "slds-theme_violet-20" },
  { value: "violet-30", classes: "slds-theme_violet-30" },
  { value: "violet-40", classes: "slds-theme_violet-40" },
  { value: "violet-50", classes: "slds-theme_violet-50" },
  { value: "violet-60", classes: "slds-theme_violet-60" },
  { value: "violet-65", classes: "slds-theme_violet-65" },
  { value: "violet-70", classes: "slds-theme_violet-70" },
  { value: "violet-80", classes: "slds-theme_violet-80" },
  { value: "violet-90", classes: "slds-theme_violet-90" },
  { value: "violet-95", classes: "slds-theme_violet-95" },
  { value: "yellow-10", classes: "slds-theme_yellow-10" },
  { value: "yellow-15", classes: "slds-theme_yellow-15" },
  { value: "yellow-20", classes: "slds-theme_yellow-20" },
  { value: "yellow-30", classes: "slds-theme_yellow-30" },
  { value: "yellow-40", classes: "slds-theme_yellow-40" },
  { value: "yellow-50", classes: "slds-theme_yellow-50" },
  { value: "yellow-60", classes: "slds-theme_yellow-60" },
  { value: "yellow-65", classes: "slds-theme_yellow-65" },
  { value: "yellow-70", classes: "slds-theme_yellow-70" },
  { value: "yellow-80", classes: "slds-theme_yellow-80" },
  { value: "yellow-90", classes: "slds-theme_yellow-90" },
  { value: "yellow-95", classes: "slds-theme_yellow-95" },
];

/**
 * @description validates badge type to prevent invalid values
 * @param {String} input
 * @returns {String}
 */
export function validateType(input) {
  if (
    !input ||
    input.length === 0 ||
    // @ts-ignore
    !TYPES.find((type) => type.value === input)
  ) {
    return "default";
  }
  return input;
}

/**
 * @description computes badge classes
 * @param {String} type
 * @returns {String}
 */
export function computeClasses(type = "default") {
  const classes = ["lwc-badge", "slds-badge", computeBadgeTypeClass(type)];
  return classes.join(" ");
}

/**
 * @description compute base type class
 * @param {String} type
 * @returns {String}
 */
export function computeBadgeTypeClass(type = "default") {
  // @ts-ignore
  return TYPES.find((t) => t.value === type).classes;
}

/**
 * @description compute icon variant
 * @param {String} type
 * @returns {String} icon variant
 */
export function computeIconVariant(type = "default") {
  const INVERSE_TYPES = ["darker", "success", "error", "blue"];

  if (INVERSE_TYPES.indexOf(type) !== -1) {
    return "inverse";
  }
  return "";
}

/**
 * @description validates CSS unit value
 * eg. 1px -> true; 10pp -> false
 * @param {String} value
 * @returns {Boolean}
 */
export function checkValidCSSUnits(value) {
  if (typeof value !== "string" || !value) {
    return false;
  }
  return /^\d+(px|em|rem|%)$/.test(value);
}

/**
 * @description validates CSS unit value
 * @param {String} value
 * @returns {String|null}
 */
export function validateCSSUnits(value) {
  if (checkValidCSSUnits(value)) {
    return value;
  }
  return null;
}

export function computeStyles(component) {
  const styles = [];
  if (component._minWidth) {
    styles.push(`min-width: ${component._minWidth}`);
  }
  if (component._maxWidth) {
    styles.push(`max-width: ${component._maxWidth}`);
  }
  return styles.join(";");
}
