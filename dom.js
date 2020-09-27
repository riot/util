import {dashToCamelCase} from './strings'

/**
 * Get all the element attributes as object
 * @param   {HTMLElement} element - DOM node we want to parse
 * @returns {Object} all the attributes found as a key value pairs
 */
export function DOMattributesToObject(element) {
  return Array.from(element.attributes).reduce((acc, attribute) => {
    acc[dashToCamelCase(attribute.name)] = attribute.value
    return acc
  }, {})
}

/**
 * Move all the child nodes from a source tag to another
 * @param   {HTMLElement} source - source node
 * @param   {HTMLElement} target - target node
 * @returns {undefined} it's a void method ¯\_(ツ)_/¯
 */

// Ignore this helper because it's needed only for svg tags
export function moveChildren(source, target) {
  if (source.firstChild) {
    target.appendChild(source.firstChild)
    moveChildren(source, target)
  }
}

/**
 * Remove the child nodes from any DOM node
 * @param   {HTMLElement} node - target node
 * @returns {undefined}
 */
export function cleanNode(node) {
  clearChildren(node.childNodes)
}

/**
 * Clear multiple children in a node
 * @param   {HTMLElement[]} children - direct children nodes
 * @returns {undefined}
 */
export function clearChildren(children) {
  Array.from(children).forEach(removeChild)
}


/**
 * Remove a node
 * @param {HTMLElement}node - node to remove
 * @returns {undefined}
 */
export const removeChild = node => node && node.parentNode && node.parentNode.removeChild(node)

/**
 * Insert before a node
 * @param {HTMLElement} newNode - node to insert
 * @param {HTMLElement} refNode - ref child
 * @returns {undefined}
 */
export const insertBefore = (newNode, refNode) => refNode && refNode.parentNode && refNode.parentNode.insertBefore(newNode, refNode)

/**
 * Replace a node
 * @param {HTMLElement} newNode - new node to add to the DOM
 * @param {HTMLElement} replaced - node to replace
 * @returns {undefined}
 */
export const replaceChild = (newNode, replaced) => replaced && replaced.parentNode && replaced.parentNode.replaceChild(newNode, replaced)
