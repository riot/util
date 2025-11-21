import { dashToCamelCase } from './strings.js'

/**
 * Get all the element attributes as object
 * @param   {HTMLElement} element - DOM node we want to parse
 * @returns {object} all the attributes found as a key value pairs
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
  // eslint-disable-next-line fp/no-loops
  while (source.firstChild) target.appendChild(source.firstChild)
}

/**
 * Remove the child nodes from any DOM node
 * @param   {HTMLElement} node - target node
 * @returns {undefined}
 */
export function cleanNode(node) {
  // eslint-disable-next-line fp/no-loops
  while (node.firstChild) node.removeChild(node.firstChild)
}

/**
 * Clear multiple children in a node
 * @param   {HTMLElement[]} children - direct children nodes
 * @returns {undefined}
 */
export function clearChildren(children) {
  // eslint-disable-next-line fp/no-loops,fp/no-let
  for (let i = 0; i < children.length; i++) removeChild(children[i])
}

/**
 * Remove a node
 * @param {HTMLElement}node - node to remove
 * @returns {undefined}
 */
export const removeChild = (node) => node.remove()

/**
 * Insert before a node
 * @param {HTMLElement} newNode - node to insert
 * @param {HTMLElement} refNode - ref child
 * @returns {undefined}
 */
export const insertBefore = (newNode, refNode) =>
  refNode?.parentNode?.insertBefore(newNode, refNode)

/**
 * Move a node into its new position. Use the moveBefore method if it's available
 * @param {HTMLElement} existingNode - node to move
 * @param {HTMLElement} refNode - ref child
 * @returns {undefined}
 */
export const moveBefore = ((hasMoveBefore) => (existingNode, refNode) =>
  hasMoveBefore
    ? refNode?.parentNode?.moveBefore(existingNode, refNode)
    : insertBefore(existingNode, refNode))(
  // Rely on the new moveBefore method to move nodes if it's available https://developer.mozilla.org/en-US/docs/Web/API/Element/moveBefore
  // cache the value of the check into a boolean variable
  typeof Element !== 'undefined' && Element.prototype.moveBefore,
)

/**
 * Replace a node
 * @param {HTMLElement} newNode - new node to add to the DOM
 * @param {HTMLElement} replaced - node to replace
 * @returns {undefined}
 */
export const replaceChild = (newNode, replaced) =>
  replaced?.parentNode?.replaceChild(newNode, replaced)
