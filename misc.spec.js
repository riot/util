import { createAttributeBindings, evaluateAttributeExpressions, panic } from './misc'
import { expect } from 'chai'
import {expressionTypes} from '@riotjs/dom-bindings'

describe('Misc', function() {
  it('panic', () => {
    expect(() => panic('err')).to.throw()
  })

  it('evaluateAttributeExpressions', () => {
    const div = document.createElement('div')
    const bindings = createAttributeBindings(div, [{
      name: 'class',
      type: expressionTypes.ATTRIBUTE,
      evaluate: scope => scope.class
    }])

    bindings.mount({
      class: 'hello'
    })

    expect(evaluateAttributeExpressions(bindings.expressions)).to.be.deep.equal({
      class: 'hello'
    })
  })

  it('evaluateProps', () => {

  })
})