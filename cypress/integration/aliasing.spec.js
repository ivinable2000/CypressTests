describe('Text Box with max characters', () => {
    beforeEach(() => {
        cy.visit('/example-3');
        
        cy.get('[data-cy="last-name-chars-left-count"]')
        .as('charsLeftSpan');

        cy.get('[data-cy="input-last-name"]')
        .as('charInput');
    })
    it('displats the appropraite remaining characters count', () => {

        cy.get('@charsLeftSpan')
            .then($charsLeftSpan => {
                expect($charsLeftSpan.text()).to.equal('15');
            })

        cy.get('@charInput').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

            cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    })

    it('prevents the user from typing more characters once the max is exceeded', () => {
        cy.get('@charInput').type('this is longer than 15 characters');

        cy.get('@charInput')
            .should('have.attr', 'value', 'this is longer ')
    })
})