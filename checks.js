/**
 * Quick type checking
 * @param   {*} element - anything
 * @param   {string} type - type definition
 * @returns {boolean} true if the type corresponds
 */
export function checkType(element, type) {
  return typeof element === type
}

/**
 * Check if an element is part of an svg
 * @param   {HTMLElement}  el - element to check
 * @returns {boolean} true if we are in an svg context
 */
export function isSvg(el) {
  const owner = el.ownerSVGElement

  return !!owner || owner === null
}

/**
 * Check if an element is a template tag
 * @param   {HTMLElement}  el - element to check
 * @returns {boolean} true if it's a <template>
 */
export function isTemplate(el) {
  return el.tagName.toLowerCase() === 'template'
}

/**
 * Check that will be passed if its argument is a function
 * @param   {*} value - value to check
 * @returns {boolean} - true if the value is a function
 */
export function isFunction(value) {
  return checkType(value, 'function')
}

/**
 * Check if a value is a Boolean
 * @param   {*}  value - anything
 * @returns {boolean} true only for the value is a boolean
 */
export function isBoolean(value) {
  return checkType(value, 'boolean')
}

/**
 * Check if a value is an Object
 * @param   {*}  value - anything
 * @returns {boolean} true only for the value is an object
 */
export function isObject(value) {
  return !isNil(value) && value.constructor === Object
}

/**
 * Check if a value is null or undefined
 * @param   {*}  value - anything
 * @returns {boolean} true only for the 'undefined' and 'null' types
 */
export function isNil(value) {
  return value === null || value === undefined
}

/**
 * Detect node js environements
 * @returns {boolean} true if the runtime is node
 */
export function isNode() {
  return typeof process !== 'undefined'
}
