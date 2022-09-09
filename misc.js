import {ATTRIBUTE, VALUE} from './expression-types.js'
import {dashToCamelCase} from './strings.js'

/**
 * Throw an error with a descriptive message
 * @param   { string } message - error message
 * @returns { undefined } hoppla.. at this point the program should stop working
 */
export function panic(message) {
  throw new Error(message)
}
/**
 * Returns the memoized (cached) function.
 * // borrowed from https://www.30secondsofcode.org/js/s/memoize
 * @param {Function} fn - function to memoize
 * @returns {Function} memoize function
 */
export function memoize(fn) {
  const cache = new Map()
  const cached = val => {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val)
  }
  cached.cache = cache
  return cached
}

/**
 * Evaluate a list of attribute expressions
 * @param   {Array} attributes - attribute expressions generated by the riot compiler
 * @returns {Object} key value pairs with the result of the computation
 */
export function evaluateAttributeExpressions(attributes) {
  return attributes.reduce((acc, attribute) => {
    const {value, type} = attribute

    switch (true) {
    // spread attribute
    case !attribute.name && type === ATTRIBUTE:
      return {
        ...acc,
        ...value
      }
    // value attribute
    case type === VALUE:
      acc.value = attribute.value
      break
    // normal attributes
    default:
      acc[dashToCamelCase(attribute.name)] = attribute.value
    }

    return acc
  }, {})
}
