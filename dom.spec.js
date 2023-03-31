import {
  DOMattributesToObject,
  cleanNode,
  clearChildren,
  insertBefore,
  moveChildren,
  removeChild,
  replaceChild,
} from './dom.js'
import { expect } from 'chai'

describe('DOM', function () {
  it('DOMattributesToObject', () => {
    const div = document.createElement('div')
    div.setAttribute('hello-world', 'hello')
    expect(DOMattributesToObject(div)).to.be.deep.equal({
      helloWorld: 'hello',
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

    clearChildren(Array.from(source.children))

    expect(source.innerHTML).to.be.equal('')
  })

  it('removeChild', () => {
    const source = document.createElement('div')
    source.innerHTML = '<p>hello</p>'
    const p = source.querySelector('p')

    removeChild(p)

    expect(source.innerHTML).to.be.equal('')
  })

  it('insertBefore', () => {
    const source = document.createElement('div')
    source.innerHTML = '<p>hello</p>'
    const div = document.createElement('div')
    const p = source.querySelector('p')

    insertBefore(div, p)

    expect(source.innerHTML).to.be.equal('<div></div><p>hello</p>')
  })

  it('replaceChild', () => {
    const source = document.createElement('div')
    source.innerHTML = '<p>hello</p>'
    const div = document.createElement('div')
    const p = source.querySelector('p')

    replaceChild(div, p)

    expect(source.innerHTML).to.be.equal('<div></div>')
  })
})
