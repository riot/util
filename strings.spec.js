import { camelToDashCase, dashToCamelCase } from './strings.js'
import { expect } from 'chai'

describe('Strings', function () {
  it('camelToDashCase', () => {
    expect(camelToDashCase('HelloWorld')).to.be.equal('hello-world')
    expect(camelToDashCase('helloWorld')).to.be.equal('hello-world')
    expect(camelToDashCase('HelloDearWorld')).to.be.equal('hello-dear-world')
  })

  it('dashToCamelCase', () => {
    expect(dashToCamelCase('hello-world')).to.be.equal('helloWorld')
    expect(dashToCamelCase('hello-dear-world')).to.be.equal('helloDearWorld')
  })
})
