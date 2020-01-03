import { DOMattributesToObject, cleanNode, clearChildren, moveChildren, removeNode } from './dom'
import { expect } from 'chai'

describe('DOM', function() {
  it('DOMattributesToObject', () => {
    const div = document.createElement('div')
    div.setAttribute('hello-world', 'hello')
    expect(DOMattributesToObject(div)).to.be.deep.equal({
      helloWorld: 'hello'
    })
  })

  it('moveChildren', () => {
    const source = document.createElement('div')
    source.innerHTML = '<p>hello</p><p>goodbye</p>'
    const target = document.createElement('div')

    moveChildren(source, target)

    expect(target.innerHTML).to.be.equal('<p>hello</p><p>goodbye</p>')
  })

  it('cleanNode', () => {
    const source = document.createElement('div')
    source.innerHTML = '<p>hello</p><p>goodbye</p>'

    cleanNode(source)

    expect(source.innerHTML).to.be.equal('')
  })

  it('clearChildren', () => {
    const source = document.createElement('div')
    source.innerHTML = '<p>hello</p><p>goodbye</p>'

    clearChildren(source.children)

    expect(source.innerHTML).to.be.equal('')
  })

  it('removeNode', () => {
    const source = document.createElement('div')
    source.innerHTML = '<p>hello</p>'
    const p = source.querySelector('p')

    removeNode(p)

    expect(source.innerHTML).to.be.equal('')
  })
})