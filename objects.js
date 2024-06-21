import { isObject } from './checks.js'

/**
 * Helper function to set an immutable property
 * @param   {Object} source - object where the new property will be set
 * @param   {string} key - object key where the new property will be stored
 * @param   {*} value - value of the new property
 * @param   {Object} options - set the property overriding the default options
 * @returns {Object} - the original object modified
 */
export function defineProperty(source, key, value, options = {}) {
  /* eslint-disable fp/no-mutating-methods */
  Object.defineProperty(source, key, {
    value,
    enumerable: false,
    writable: false,
    configurable: true,
    ...options,
  })
  /* eslint-enable fp/no-mutating-methods */

  return source
}

/**
 * Define multiple properties on a target object
 * @param   {Object} source - object where the new properties will be set
 * @param   {Object} properties - object containing as key pair the key + value properties
 * @param   {Object} options - set the property overriding the default options
 * @returns {Object} the original object modified
 */
export function defineProperties(source, properties, options) {
  Object.entries(properties).forEach(([key, value]) => {
    defineProperty(source, key, value, options)
  })

  return source
}

/**
 * Define default properties if they don't exist on the source object
 * @param   {Object} source - object that will receive the default properties
 * @param   {Object} defaults - object containing additional optional keys
 * @returns {Object} the original object received enhanced
 */
export function defineDefaults(source, defaults) {
  Object.entries(defaults).forEach(([key, value]) => {
    if (!source[key]) source[key] = value
  })

  return source
}

/**
 * Simple clone deep function, do not use it for classes or recursive objects!
 * @param   {*} source - possibly an object to clone
 * @returns {*} the object we wanted to clone
 */
export function cloneDeep(source) {
  return structuredClone(source)
}

/**
 * Like Array.prototype.filter but for objects
 * @param {Object} source - target object
 * @param {Funciton} filter - filter function
 * @return {Object} filtered source or the original source received
 */
export function filter(source, filter) {
  return isObject(source)
    ? Object.fromEntries(
        Object.entries(source).filter(([key, value]) => filter(key, value)),
      )
    : source
}

/**
 * Generate a new object picking only the properties from a given array
 * @param {Object} source - target object
 * @param {Array} keys - list of keys that we want to copy over to the new object
 * @return {Object} a new object conaining only the keys that we have picked from the keys array list
 */
export function pick(source, keys) {
  return isObject(source)
    ? Object.fromEntries(keys.map((key) => [key, source[key]]))
    : source
}
