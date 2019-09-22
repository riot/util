import {createExpression, expressionTypes} from '@riotjs/dom-bindings'
import {dashToCamelCase} from './strings'

/**
 * Throw an error with a descriptive message
 * @param   { string } message - error message
 * @returns { undefined } hoppla.. at this point the program should stop working
 */
export function panic(message) {
  throw new Error(message)
}

/**
 * Create the bindings to update the component attributes
 * @param   {HTMLElement} node - node where we will bind the expressions
 * @param   {Array} attributes - list of attribute bindings
 * @returns {TemplateChunk} - template bindings object
 */
export function createAttributeBindings(node, attributes = []) {
  const expressions = attributes.map(a => createExpression(node, a))
  const binding = {}

  const updateValues = method => scope => {
    expressions.forEach(e => e[method](scope))

    return binding
  }

  return Object.assign(binding, {
    expressions,
    mount: updateValues('mount'),
    update: updateValues('update'),
    unmount: updateValues('unmount')
  })
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
    case !attribute.name && type === expressionTypes.ATTRIBUTE:
      return {
        ...acc,
        ...value
      }
    // value attribute
    case type === expressionTypes.VALUE:
      acc.value = attribute.value
      break
    // normal attributes
    default:
      acc[dashToCamelCase(attribute.name)] = attribute.value
    }

    return acc
  }, {})
}