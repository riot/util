import { autobindMethods, callOrAssign, noop } from './functions.js'
import { expect } from 'chai'

describe('Functions', function () {
  it('noop', () => {
    expect(() => noop()).to.not.throw
    expect(noop.call({ hello: 'hello' })).to.be.deep.equal({ hello: 'hello' })
  })

  it('autobindMethods', () => {
    const methods = autobindMethods(
      {
        name: 'me',
        onMount() {
          return this
        },
        onUnmount() {
          return this
        },
      },
      ['onMount', 'onUnmount'],
    )
    expect(methods.onMount().name).to.be.equal('me')
    expect(methods.onUnmount().name).to.be.equal('me')
  })

  it('callOrAssign', () => {
    /* eslint-disable fp/no-class */
    class MyClas {
      hello() {
        return 'me'
      }
    }
    /* eslint-enable fp/no-class */
    expect(callOrAssign(() => ({ hello: 'hello' }))).to.be.deep.equal({
      hello: 'hello',
    })
    expect(callOrAssign({ hello: 'hello' })).to.be.deep.equal({
      hello: 'hello',
    })
    expect(callOrAssign(MyClas).hello()).to.be.equal('me')
  })
})
