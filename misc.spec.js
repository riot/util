import { evaluateAttributeExpressions, panic } from './misc'
import {ATTRIBUTE} from './expression-types'
import { expect } from 'chai'

describe('Misc', function() {
  it('panic', () => {
    expect(() => panic('err')).to.throw()
  })

  it('evaluateAttributeExpressions', () => {
    expect(evaluateAttributeExpressions([
      {
        name: 'class',
        type: ATTRIBUTE,
        value: 'hello'
      }
    ])).to.be.deep.equal({
      class: 'hello'
    })
  })

  it('evaluateProps', () => {

  })
})