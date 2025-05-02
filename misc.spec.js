import { generatePropsFromAttributes, memoize, panic } from './misc.js'
import { ATTRIBUTE } from './expression-types.js'
import { expect } from 'chai'

describe('Misc', function () {
  it('panic', () => {
    expect(() => panic('err')).to.throw()
  })

  it('evaluateAttributeExpressions', () => {
    expect(
      generatePropsFromAttributes(
        [
          {
            name: 'class',
            type: ATTRIBUTE,
            evaluate: (scope) => scope.text,
          },
        ],
        { text: 'hello' },
      ),
    ).to.be.deep.equal({
      class: 'hello',
    })
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
