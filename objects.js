
/**
 * Helper function to set an immutable property
 * @param   {Object} source - object where the new property will be set
 * @param   {string} key - object key where the new property will be stored
 * @param   {*} value - value of the new property
 * @param   {Object} options - set the propery overriding the default options
 * @returns {Object} - the original object modified
 */
export function defineProperty(source, key, value, options = {}) {
  /* eslint-disable fp/no-mutating-methods */
  Object.defineProperty(source, key, {
    value,
    enumerable: false,
    writable: false,
    configurable: true,
    ...options
  })
  /* eslint-enable fp/no-mutating-methods */

  return source
}

/**
 * Define multiple properties on a target object
 * @param   {Object} source - object where the new properties will be set
 * @param   {Object} properties - object containing as key pair the key + value properties
 * @param   {Object} options - set the propery overriding the default options
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
 * @param   {*} source - possibily an object to clone
 * @returns {*} the object we wanted to clone
 */
export function cloneDeep(source) {
  return JSON.parse(JSON.stringify(source))
}
