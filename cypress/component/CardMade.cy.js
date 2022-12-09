import CardMain from '../../src/components/cardMade/CardMain'

describe('CardMade.cy.js', () => {
  it('check card parallax', () => {
    cy.mount(<CardMain/>)
  })
})