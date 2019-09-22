import { isBoolean, isFunction, isNil, isNode, isObject } from './checks'
import { expect } from 'chai'

describe('Checks', function() {
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
    expect(isObject(undefined)).to.be.not.ok
  })
})