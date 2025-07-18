import { generatePropsFromAttributes, memoize, panic } from './misc.js'
import { ATTRIBUTE, REF } from './expression-types.js'
import { expect } from 'chai'

describe('Misc', function () {
  it('panic', () => {
    expect(() => panic('err')).to.throw()
  })

  it('generatePropsFromAttributes', () => {
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

  it('generatePropsFromAttributes do not skip ref attributes', () => {
    expect(
      generatePropsFromAttributes(
        [
          {
            type: REF,
            evaluate: (scope) => scope.ref,
          },
        ],
        {
          ref: 'ref',
        },
      ),
    ).to.be.deep.equal({ ref: 'ref' })
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
