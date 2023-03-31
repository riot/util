import {
  isBoolean,
  isFunction,
  isNil,
  isNode,
  isObject,
  isSvg,
  isTemplate,
} from './checks.js'
import { expect } from 'chai'

describe('Checks', function () {
  it('isFunction', () => {
    expect(isFunction(() => {})).to.be.ok
    expect(isFunction(null)).to.be.not.ok
  })

  it('isBoolean', () => {
    expect(isBoolean(true)).to.be.ok
    expect(isBoolean(false)).to.be.ok
    expect(isBoolean(null)).to.be.not.ok
    expect(isBoolean(0)).to.be.not.ok
    expect(isBoolean(1)).to.be.not.ok
  })

  it('isNil', () => {
    expect(isNil(true)).to.be.not.ok
    expect(isNil(false)).to.be.not.ok
    expect(isNil(null)).to.be.ok
    expect(isNil(undefined)).to.be.ok
    expect(isNil(0)).to.be.not.ok
    expect(isNil(1)).to.be.not.ok
  })

  it('isNode', () => {
    expect(isNode()).to.be.ok
  })

  it('isObject', () => {
    expect(isObject({})).to.be.ok
    expect(isObject(null)).to.be.not.ok
    expect(isObject(Array)).to.be.not.ok
    expect(isObject(() => {})).to.be.not.ok
    expect(
      isObject(
        new (function () {
          return {}
        })(),
      ),
    ).to.be.ok
    expect(isObject(new (function () {})())).to.be.not.ok
    expect(isObject(undefined)).to.be.not.ok
  })

  it('isSvg', () => {
    const div = document.createElement('div')
    div.innerHTML = '<svg><g></g></svg><div></div>'
    expect(isSvg(div.querySelector('svg'))).to.be.ok
    expect(isSvg(div)).to.be.not.ok
    expect(isSvg(div.querySelector('g'))).to.be.ok
  })

  it('isTemplate', () => {
    expect(isTemplate(document.createElement('template'))).to.be.ok
    expect(isTemplate(document.createElement('div'))).to.be.not.ok
  })
})
