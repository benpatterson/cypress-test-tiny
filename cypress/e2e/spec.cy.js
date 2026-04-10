/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })

  it('does cyprompt', () => {
    cy.prompt([
      'visit example.cypress.io',
      'click on filter',
      'you should see ".eq()"'
    ])
  })
})
