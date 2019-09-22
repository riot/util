import {isFunction} from './checks'

// does simply nothing
export function noop() {
  return this
}

/**
 * Autobind the methods of a source object to itself
 * @param   {Object} source - probably a riot tag instance
 * @param   {Array<string>} methods - list of the methods to autobind
 * @returns {Object} the original object received
 */
export function autobindMethods(source, methods) {
  methods.forEach(method => {
    source[method] = source[method].bind(source)
  })

  return source
}

/**
 * Call the first argument received only if it's a function otherwise return it as it is
 * @param   {*} source - anything
 * @returns {*} anything
 */
export function callOrAssign(source) {
  return isFunction(source) ? (source.prototype && source.prototype.constructor ?
    new source() : source()
  ) : source
}
