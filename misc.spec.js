import { evaluateAttributeExpressions, panic } from './misc'
import { expect } from 'chai'
import {expressionTypes} from '@riotjs/dom-bindings'

describe('Misc', function() {
  it('panic', () => {
    expect(() => panic('err')).to.throw()
  })

  it('evaluateAttributeExpressions', () => {
    expect(evaluateAttributeExpressions([
      {
        name: 'class',
        type: expressionTypes.ATTRIBUTE,
        value: 'hello'
      }
    ])).to.be.deep.equal({
      class: 'hello'
    })
  })

  it('evaluateProps', () => {

  })
})