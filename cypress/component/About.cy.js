import About from '../../src/components/about/About'

describe('About.cy.js', () => {
  it('check about me', () => {
    cy.mount(<About/>)
  })
})