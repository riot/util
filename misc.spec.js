import { evaluateAttributeExpressions, memoize, panic } from './misc.js'
import { ATTRIBUTE, REF } from './expression-types.js'
import { expect } from 'chai'

describe('Misc', function () {
  it('panic', () => {
    expect(() => panic('err')).to.throw()
  })

  it('evaluateAttributeExpressions', () => {
    expect(
      evaluateAttributeExpressions([
        {
          name: 'class',
          type: ATTRIBUTE,
          value: 'hello',
        },
      ]),
    ).to.be.deep.equal({
      class: 'hello',
    })
  })

  it('evaluateAttributeExpressions (skip ref attributes)', () => {
    expect(
      evaluateAttributeExpressions([
        {
          type: REF,
        },
      ]),
    ).to.be.deep.equal({})
  })

  it('memoize', () => {
    let count = 0 // eslint-disable-line
    const increment = memoize(function () {
      count++

      return count
    })

    increment(1)
    increment(1)

    expect(count).to.be.equal(1)
  })
})
