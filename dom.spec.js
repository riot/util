import { DOMattributesToObject } from './dom'
import { expect } from 'chai'

describe('DOM', function() {
  it('DOMattributesToObject', () => {
    const div = document.createElement('div')
    div.setAttribute('hello-world', 'hello')
    expect(DOMattributesToObject(div)).to.be.deep.equal({
      helloWorld: 'hello'
    })
  })
})