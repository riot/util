import {
  cloneDeep,
  defineDefaults,
  defineProperties,
  defineProperty,
} from './objects.js'
import { expect } from 'chai'

describe('Objects', function () {
  it('defineProperty', () => {
    const source = {}
    defineProperty(source, 'name', 'hello')
    expect(source.name).to.be.equal('hello')

    expect(() => {
      source.name = 'goodbye'
    }).to.throw()
  })

  it('defineProperties', () => {
    const source = {}
    defineProperties(source, {
      name: 'hello',
    })
    expect(source.name).to.be.equal('hello')

    expect(() => {
      source.name = 'goodbye'
    }).to.throw()
  })

  it('defineDefaults', () => {
    const source = {
      name: 'hello',
    }

    defineDefaults(source, {
      name: 'goodbye',
      surname: 'hello',
    })

    expect(source.name).to.be.equal('hello')
  })

  it('cloneDeep', () => {
    const source = { name: 'hello' }
    const clone = cloneDeep(source)

    source.surname = 'goodbye'

    expect(clone.surname).to.be.not.ok
    expect(clone.name).to.be.equal('hello')
  })
})
